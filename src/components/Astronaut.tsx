import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import type { JSX } from 'react';
import type { GLTF } from 'three-stdlib';
import type { Group } from 'three';
import { useControls } from 'leva';

type GLTFAction = THREE.AnimationClip;

type GLTFResult = GLTF & {
    nodes: {
        playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0: THREE.SkinnedMesh;
        playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0_1: THREE.SkinnedMesh;
        playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0_2: THREE.SkinnedMesh;
        mixamorigHips: THREE.Bone;
        Ctrl_Master: THREE.Bone;
        Ctrl_ArmPole_IK_Left: THREE.Bone;
        Ctrl_Hand_IK_Left: THREE.Bone;
        Ctrl_ArmPole_IK_Right: THREE.Bone;
        Ctrl_Hand_IK_Right: THREE.Bone;
        Ctrl_Foot_IK_Left: THREE.Bone;
        Ctrl_LegPole_IK_Left: THREE.Bone;
        Ctrl_Foot_IK_Right: THREE.Bone;
        Ctrl_LegPole_IK_Right: THREE.Bone;
    };
    materials: {
        SuitMat: THREE.MeshStandardMaterial;
        BackpackMat: THREE.MeshStandardMaterial;
        HelmetMat: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

type AstronautProps = JSX.IntrinsicElements['group'] & {
    animation?: string;
};

export function Astronaut(props: AstronautProps) {
    const { animation } = props;
    const group = useRef<Group | null>(null);
    const { scene } = useGLTF('models/astronaut.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;

    const { animations: astronautAnimations } = useFBX('animations/float.fbx');

    const { headFollow, cursorFollow } = useControls({
        headFollow: false,
        cursorFollow: false,
    });
    console.log(astronautAnimations);

    astronautAnimations[0].name = 'Float';
    astronautAnimations[1].name = 'Wave';
    astronautAnimations[2].name = 'Fall';

    const { actions } = useAnimations(astronautAnimations, group);

    useFrame((state) => {
        if (headFollow) {
            group.current?.getObjectByName('mixamorigSpine1')?.lookAt(state.camera.position);
        }

        if (cursorFollow) {
            const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1);
            group.current?.getObjectByName('mixamorigNeck')?.lookAt(target);
        }
    });

    useEffect(() => {
        if (animation) {
            actions[animation]?.reset().fadeIn(0.5).play();
            return () => {
                actions[animation]?.reset().fadeOut(0.5).stop();
            };
        }
    }, [animation]);

    return (
        <group {...props} ref={group} dispose={null}>
            <group rotation-x={-Math.PI / 2}>
                <primitive object={nodes.mixamorigHips} />
                <primitive object={nodes.Ctrl_Master} />
                <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
                <primitive object={nodes.Ctrl_Hand_IK_Left} />
                <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
                <primitive object={nodes.Ctrl_Hand_IK_Right} />
                <primitive object={nodes.Ctrl_Foot_IK_Left} />
                <primitive object={nodes.Ctrl_LegPole_IK_Left} />
                <primitive object={nodes.Ctrl_Foot_IK_Right} />
                <primitive object={nodes.Ctrl_LegPole_IK_Right} />
                <skinnedMesh
                    geometry={nodes.playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0.geometry}
                    material={materials.SuitMat}
                    skeleton={nodes.playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0.skeleton}
                />
                <skinnedMesh
                    geometry={
                        nodes.playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0_1.geometry
                    }
                    material={materials.BackpackMat}
                    skeleton={
                        nodes.playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0_1.skeleton
                    }
                />
                <skinnedMesh
                    geometry={
                        nodes.playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0_2.geometry
                    }
                    material={materials.HelmetMat}
                    skeleton={
                        nodes.playerdarky_mrustspacesuitmdl_body_Spacesuit_Suit_LOD0_2.skeleton
                    }
                />
            </group>
        </group>
    );
}

useGLTF.preload('models/astronaut.glb');

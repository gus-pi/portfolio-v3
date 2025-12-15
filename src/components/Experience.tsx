import { OrbitControls, useGLTF } from '@react-three/drei';
import { Astronaut } from './Astronaut';

export const Experience = () => {
    return (
        <>
            <OrbitControls />
            <group position-y={-1}>
                <Astronaut />
            </group>
            <ambientLight intensity={1} />
        </>
    );
};

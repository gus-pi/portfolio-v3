import { Environment, OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { Astronaut } from './Astronaut';
import { useControls } from 'leva';

export const Experience = () => {
    const { animation } = useControls({
        animation: {
            value: 'Float',
            options: ['Float', 'Wave', 'Fall'],
        },
    });
    return (
        <>
            <OrbitControls />
            <Environment
                background={true} // can be true, false or "only" (which only sets the background) (default: false)
                backgroundBlurriness={0} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                backgroundIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
                backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
                environmentIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
                environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
                files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
                path="/"
                preset="city"
                scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
            />
            <Stars />
            <group position-y={-1}>
                <Astronaut animation={animation} />
            </group>
            <ambientLight intensity={1} />
        </>
    );
};

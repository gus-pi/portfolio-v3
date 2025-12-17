import { OrbitControls, useGLTF } from '@react-three/drei';
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
            <group position-y={-1}>
                <Astronaut animation={animation} />
            </group>
            <ambientLight intensity={1} />
        </>
    );
};

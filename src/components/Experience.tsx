import { OrbitControls, useGLTF } from '@react-three/drei';
import { Avatar } from './Avatar';
import { Astronaut } from './Astronaut';

export const Experience = () => {
    return (
        <>
            <OrbitControls />

            <Astronaut />
            <ambientLight intensity={1} />
        </>
    );
};

import { Canvas } from '@react-three/fiber';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import StairsContainer from './components/StairTransition';
import { Experience } from './components/Experience';
import { Scroll, ScrollControls } from '@react-three/drei';
import Interface from './components/Interface';

const App = () => {
    return (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
            <color attach="background" args={['#1a191b']} />
            <ScrollControls pages={4} damping={0.1}>
                <Experience />
                <Scroll html>
                    <Interface />
                </Scroll>
            </ScrollControls>
        </Canvas>
        // <div className="bg-gray-800">
        //     <Navbar />
        //     <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        //         <StairsContainer />
        //         <Hero />
        //         <About />
        //     </div>
        // </div>
    );
};
export default App;

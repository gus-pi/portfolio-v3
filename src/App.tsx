import About from './components/About';
import Hero from './components/Hero';

const App = () => {
    return (
        <div className="bg-gray-800">
            <div className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory">
                <Hero />
                <About />
            </div>
        </div>
    );
};
export default App;

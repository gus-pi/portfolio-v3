import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="h-screen w-screen p-8 max-w-2xl mx-auto flex flex-col items-start justify-center">
            {children}
        </section>
    );
};

const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};
export default Interface;

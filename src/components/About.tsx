import { FiDownload } from 'react-icons/fi';
import Social from './Social';
import Button from './Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <section className="h-screen w-screen p-8 max-w-4xl mx-auto flex flex-col items-start justify-center">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-0">
                        <span className="text-xl text-white">Fullstack Web Dev</span>
                        <h1 className="text-7xl font-bold mb-6 text-white">
                            Hello, I&apos;m <br />{' '}
                            <span className="text-[#00ff99]">Gustavo Pinedo</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I specialize in developing fullstack applications using the latest
                            technologies.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <a
                                href="\assets\gp-cv-2024.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button>
                                    <span className="text-sm">DOWNLOAD CV</span>
                                    <FiDownload className="text-xl" />
                                </Button>
                            </a>
                            <div className="mb-8 xl:mb-0 flex gap-6">
                                <a
                                    href="https://github.com/gus-pi"
                                    className="w-9 h-9 rounded-full border items-center flex text-[#00ff99] font-medium hover:bg-[#00ff99] hover:text-black hover:border-transparent transition duration-300 ease-in-out cursor-pointer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="w-6 h-6 mx-auto" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/gustavo-pinedo-b320108a"
                                    className="w-9 h-9 rounded-full border items-center flex text-[#00ff99] font-medium hover:bg-[#00ff99] hover:text-black hover:border-transparent transition duration-300 ease-in-out cursor-pointer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="w-6 h-6 mx-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;

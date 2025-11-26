import { motion } from 'framer-motion';
import { FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import {
    SiMongodb,
    SiNextdotjs,
    SiPostman,
    SiPrisma,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

const skills = {
    title: 'My Skills',
    description:
        "These are the web dev tools with which I've worked the most and are my go to tools as of right now.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'css',
        },
        {
            icon: <FaJs />,
            name: 'javascript',
        },
        {
            icon: <SiTypescript />,
            name: 'typescript',
        },
        {
            icon: <FaReact />,
            name: 'react.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js ',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css',
        },
        {
            icon: <SiPrisma />,
            name: 'prisma',
        },
        {
            icon: <SiMongodb />,
            name: 'mongodb',
        },
        {
            icon: <FaGit />,
            name: 'git',
        },
        {
            icon: <FaGithub />,
            name: 'github',
        },
        {
            icon: <SiPostman />,
            name: 'postman',
        },
    ],
};

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.6, duration: 0.4, ease: 'easeIn' },
            }}
            className="mb-8"
        >
            <div className="w-full h-full px-52 text-gray-50">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[1000px] text-wrap mx-auto xl:mx-0">
                            {skills.description}
                        </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                        {skills.skillList.map((skill, index) => (
                            <li
                                key={index}
                                className="w-full h-[120px]"
                                style={{ perspective: '1000px' }}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    style={{ transformStyle: 'preserve-3d' }}
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                                >
                                    {/* Front face - Icon */}
                                    <div
                                        className="absolute w-full h-full bg-[#232329] rounded-xl flex justify-center items-center"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        <div className="text-6xl hover:text-accent-hover transition-colors duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>

                                    {/* Back face - Name */}
                                    <div
                                        className="absolute w-full h-full bg-[#232329] rounded-xl flex justify-center items-center"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)',
                                        }}
                                    >
                                        <p className="text-lg font-medium hover:text-accent-hover transition-colors duration-300">
                                            {skill.name}
                                        </p>
                                    </div>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;

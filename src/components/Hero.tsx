import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section className="w-full h-screen snap-center relative bg-slate-900">
            <div className="flex flex-col items-center h-full relative ">
                <h1>Hero</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sequi ratione
                    excepturi illum suscipit voluptas quia esse rem architecto labore praesentium
                    dolor in nisi, incidunt optio asperiores voluptatibus numquam officiis?
                </p>
                <div className="absolute bottom-0 right-0">
                    <motion.img
                        src="/helmetPNG.png"
                        alt="hero image"
                        className="max-h-[85vh] w-auto object-contain"
                        animate={{
                            skewX: [0, 0, 2, -2, 0],
                            x: [0, 0, -2, 2, 0],
                        }}
                        transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 6,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;

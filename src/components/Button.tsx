import type { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button className="flex space-x-3 text-[#00ff99] font-medium border border-[#00ff99] px-4 py-2 rounded-3xl hover:bg-[#00ff99] hover:text-black hover:border-transparent transition duration-300 ease-in-out cursor-pointer">
            {children}
        </button>
    );
};
export default Button;

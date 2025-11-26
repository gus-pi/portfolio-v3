import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from './Button';

type SocialProps = {
    containerStyles: string;
    iconStyles: string;
};

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/gus-pi' },
    {
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/gustavo-pinedo-b320108a/',
    },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.path}
                    className={iconStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>{item.icon}</Button>
                </a>
            ))}
        </div>
    );
};

export default Social;

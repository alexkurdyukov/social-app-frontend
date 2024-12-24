import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

interface INavButtonProps {
    children: React.ReactNode;
    icon: JSX.Element;
    href: string;
}

export const NavButton = ({ children, icon, href }: INavButtonProps) => {
    return (
        <Button className="flex justify-start" icon={icon}>
            <Link to={href}>{children}</Link>
        </Button>
    );
};

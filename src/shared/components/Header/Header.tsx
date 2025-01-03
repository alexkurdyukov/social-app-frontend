import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import { ThemeContext } from '../../../app/theme/ThemeProvider';
import { useContext } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">SocialNetwork</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem
                    onClick={toggleTheme}
                    className="lg:flex text-3xl cursor-pointer"
                >
                    {theme === 'light' ? <FaRegMoon /> : <LuSunMedium />}
                </NavbarItem>
                <NavbarItem></NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

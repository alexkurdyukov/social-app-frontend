import { BsPostcard } from 'react-icons/bs';
import { NavButton } from '../NavButton/NavButton';
import { FiUsers } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex flex-col gap-5">
                <li>
                    <NavButton icon={<BsPostcard />} href={'/'}>
                        Посты
                    </NavButton>
                </li>
                <li>
                    <NavButton icon={<FiUsers />} href={'following'}>
                        Подписчики
                    </NavButton>
                </li>
                <li>
                    <NavButton icon={<FaUsers />} href={'/followers'}>
                        Подписки
                    </NavButton>
                </li>
            </ul>
        </nav>
    );
};

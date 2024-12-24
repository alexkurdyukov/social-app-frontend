import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

export const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <div className="flex-2 p-4">
                    <Navbar />
                </div>
                <div className="flex-2 p-1">
                    <Outlet />
                </div>
            </Container>
        </>
    );
};

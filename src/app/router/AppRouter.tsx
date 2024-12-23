import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import { ROUTES } from './routes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LAYOUT} element={<App />} />
                <Route path={ROUTES.AUTH} element={<div>auth</div>} />
            </Routes>
        </BrowserRouter>
    );
};

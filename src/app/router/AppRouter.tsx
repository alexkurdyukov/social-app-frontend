import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import { Layout } from '../../shared/components/Layout/Layout';
import { Posts } from '../../pages/Posts/Posts';
import { Post } from '../../pages/Post/Post';
import { Profile } from '../../pages/Profile/Profile';
import { Followers } from '../../pages/Followers/Followers';
import { Following } from '../../pages/Following/Following';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route path={'/'} element={<Posts />} />
                    <Route path={'posts/:id'} element={<Post />} />
                    <Route path={'users/:id'} element={<Profile />} />
                    <Route path={'followers'} element={<Followers />} />
                    <Route path={'following'} element={<Following />} />
                </Route>
                <Route path={ROUTES.AUTH} element={<div>auth</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from 'pages/Posts/Posts';
import { Post } from 'pages/Post/Post';
import { Profile } from 'pages/Profile/Profile';
import { Following } from 'pages/Following/Following';
import { Followers } from 'pages/Followers/Followers';
import { Auth } from 'pages/Auth/Auth';
import { ROUTES } from './routes';
import { Layout } from 'shared/components';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LAYOUT} element={<Layout />}>
                    <Route path={ROUTES.POSTS} element={<Posts />} />
                    <Route path={ROUTES.POST} element={<Post />} />
                    <Route path={ROUTES.USER} element={<Profile />} />
                    <Route path={ROUTES.FOLLOWERS} element={<Followers />} />
                    <Route path={ROUTES.FOLLOWING} element={<Following />} />
                </Route>
                <Route path={ROUTES.AUTH} element={<Auth />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(async () => import('../pages/Home').then((m) => ({ default: m.Home })));
const PostPage = lazy(async () => import('../pages/post').then((m) => ({ default: m.PostPage })));
const DefaultLayout = lazy(async () => import('../layouts/DefaultLayout').then((m) => ({ default: m.DefaultLayout })));

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:postNumber" element={<PostPage />} />
            </Route>
        </Routes>
    )
}
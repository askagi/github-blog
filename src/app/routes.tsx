import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(async () => import('../Home').then((m) => ({ default: m.Home })));
const DefaultLayout = lazy(async () => import('../layouts/DefaultLayout').then((m) => ({ default: m.DefaultLayout })));

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    )
}
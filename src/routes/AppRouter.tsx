import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const UsersList = lazy(() => import('../components/UsersList/UsersList'));
const UserDetail = lazy(() => import('../components/UserDetail/UserDetail'));

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  </Suspense>
);

export default AppRouter;

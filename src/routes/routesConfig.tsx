import { Navigate, createBrowserRouter } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import PeoplePage from '../containers/PeoplePage';
import Layout from './Layout';
import NotFoundPage from '../containers/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/people',
        element: <PeoplePage />,
      },
      {
        path: '/not-found',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

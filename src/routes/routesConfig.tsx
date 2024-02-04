import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import PeoplePage from '../containers/PeoplePage';
import Layout from './Layout';
import PageNotFound from '../containers/PageNotFound';

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
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

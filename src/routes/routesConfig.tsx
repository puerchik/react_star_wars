import { Navigate, createBrowserRouter } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import PeoplePage from '../containers/PeoplePage';
import Layout from './Layout';
import NotFoundPage from '../containers/NotFoundPage';
import { getResourceLoader } from '../containers/PeoplePage/PeoplePage';
import PersonPage from '../containers/PersonPage';
import { getPersonLoader } from '../containers/PersonPage/PersonPage';
import FavoritesPage from '../containers/FavoritesPage';
import SearchPage from '../containers/SearchPage';
import ErrorMessage from '../components/ErrorMessage';

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
        path: '/react_star_wars',
        element: <Navigate to={'/'} />,
      },
      {
        path: '/people',
        element: <PeoplePage />,
        loader: getResourceLoader,
      },
      {
        path: '/people/:id',
        element: <PersonPage />,
        loader: getPersonLoader,
      },
      {
        path: '/not-found',
        element: <NotFoundPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/fail',
        element: <ErrorMessage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

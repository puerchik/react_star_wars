import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import HomePage from '../HomePage';
import Layout from '../../routes/Layout';
import ForStudyBlog, { postsLoader } from '../../components/ForStudy/ForStudyBlog';
import ForStudySinglePage, { postLoader } from '../../components/ForStudy/ForStudySinglePage';
import EditPost from '../../components/ForStudy/EditPost';
import { LoginPage } from '../../components/ForStudy/Loginpage';
import { RequireAuth } from '../../hoc/RequireAuth';
import { AuthProvider } from '../../hoc/AuthProvider';
import s from './App.module.css';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/posts" element={<ForStudyBlog />} loader={postsLoader} />
        <Route path="/posts-about-us" element={<Navigate to={'/posts'} replace />} />
        <Route path="/posts/:id" element={<ForStudySinglePage />} loader={postLoader} />
        <Route
          path="/posts/:id/edit"
          element={
            <RequireAuth>
              <EditPost />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Route>,
    ),
  );

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;

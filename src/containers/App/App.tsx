import { Navigate, Route, Routes } from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import HomePage from '../HomePage';
import Layout from '../../routes/Layout';
import s from './App.module.css';
import ForStudyBlog from '../../components/ForStudy/ForStudyBlog';
import ForStudySinglePage from '../../components/ForStudy/ForStudySinglePage';
import EditPost from '../../components/ForStudy/EditPost';
import { LoginPage } from '../../components/ForStudy/Loginpage';
import { RequireAuth } from '../../hoc/RequireAuth';
import { AuthProvider } from '../../hoc/AuthProvider';
import { useAuth } from '../../hook/useAuth';

const App = () => {
  const auth = useAuth();

  console.log(auth);

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/posts" element={<ForStudyBlog />} />
            <Route path="/posts-about-us" element={<Navigate to={'/posts'} replace />} />
            <Route path="/posts/:id" element={<ForStudySinglePage />} />
            <Route
              path="/posts/:id/edit"
              element={
                <RequireAuth>
                  <EditPost />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;

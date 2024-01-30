import { Navigate, Route, Routes } from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import HomePage from '../HomePage';
import Layout from '../../routes/Layout';
import s from './App.module.css';
import ForStudyBlog from '../../components/ForStudy/ForStudyBlog';
import ForStudySinglePage from '../../components/ForStudy/ForStudySinglePage';
import EditPost from '../../components/ForStudy/EditPost';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/posts" element={<ForStudyBlog />} />
          <Route path="/posts-about-us" element={<Navigate to={'/posts'} replace />} />
          <Route path="/posts/:id" element={<ForStudySinglePage />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

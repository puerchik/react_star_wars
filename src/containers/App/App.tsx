import { Route, Routes } from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import HomePage from '../HomePage';
import Layout from '../../routes/Layout';
import s from './App.module.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

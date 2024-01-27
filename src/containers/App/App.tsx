import { Link, Route, Routes } from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import HomePage from '../HomePage';
import s from './App.module.css';

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
    </>
  );
};

export default App;

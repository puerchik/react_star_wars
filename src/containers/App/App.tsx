import s from './App.module.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../routes/routesConfig';

const App = () => {
  return (
    <div className={s.wrapper}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

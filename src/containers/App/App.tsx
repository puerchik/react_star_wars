import s from './App.module.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../routes/routesConfig';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;

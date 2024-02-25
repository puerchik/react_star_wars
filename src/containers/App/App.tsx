import s from './App.module.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../routes/routesConfig';
import { Provider } from 'react-redux';
import { persistor, store } from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;

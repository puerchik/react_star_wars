import s from './App.module.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../routes/routesConfig';
import { Provider } from 'react-redux';
import { persistor, store } from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from '../../context/ThemeProvider';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;

import { Dispatch, FC, SetStateAction, useState } from 'react';
import s from './hoc.module.css';
import ErrorMessage from '../components/ErrorMessage';

type ViewProps = {
  setError: Dispatch<SetStateAction<boolean>>;
  [key: string]: any;
};

export const WithErrorApi = (View: FC<ViewProps>) => {
  const WithError = (props: any) => {
    const [error, setError] = useState<boolean>(false);
    return <>{error ? <ErrorMessage /> : <View setError={setError} {...props} />}</>;
  };
  return WithError;
};

export default WithErrorApi;

import { Dispatch, FC, SetStateAction, useState } from 'react';
import s from './hoc.module.css';

type ViewProps = {
  setError: Dispatch<SetStateAction<boolean>>;
  [key: string]: any;
};

export const WithErrorApi = (View: FC<ViewProps>) => {
  const WithError = (props: any) => {
    const [error, setError] = useState<boolean>(false);
    return (
      <>{error ? <h1 className={s.error}>Error</h1> : <View setError={setError} {...props} />}</>
    );
  };
  return WithError;
};

export default WithErrorApi;

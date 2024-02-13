import { AxiosError, AxiosResponse } from 'axios';

export const checkResultTry = (res: AxiosResponse) => {
  if (res.status !== 200) {
    console.log('Could not fetch. ', res.status);
    return false;
  }
  return res.data;
};

export const checkResultCatch = (e: unknown) => {
  if (e instanceof AxiosError) {
    console.log('Could not fetch. ', e.response?.status);
    return false;
  }
};

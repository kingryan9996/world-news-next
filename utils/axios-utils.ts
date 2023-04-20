import axios, { AxiosError, AxiosResponse } from 'axios';
import { INews } from '../types/News';

const client = axios.create({ baseURL:"http://127.0.0.1:5000" });

export const request = async <T extends AxiosResponse>({
  ...options
}): Promise<T> => {
//   client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (reponse: AxiosResponse<INews[]> | any) => reponse;
  const onError = (error: AxiosError) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
};

const handleSuccessRequest = (config: AxiosRequestConfig) => {
  return config;
};

const handleErrorRequest = (error: unknown) => {
  console.error(error);
  return Promise.reject(error);
};

const handleSuccessResponse = (response: AxiosResponse<unknown>) => response;

const handleErrorResponse = (error: unknown) => {
  console.error(error);
  return Promise.reject(error);
};

const baseURL = process.env.REACT_APP_API_BASE_URL;

const httpClient = axios.create();
httpClient.defaults.baseURL = baseURL;
httpClient.defaults.headers = defaultHeaders;
httpClient.interceptors.request.use(handleSuccessRequest, handleErrorRequest);
httpClient.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export { baseURL, httpClient };

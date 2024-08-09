import axios from 'axios';
import Endpoints from './constants';

// Create an Axios instance
const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3129/',
  baseURL: Endpoints.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Modify the request config before sending it
    // For example, add an Authorization header
    // const token = localStorage.getItem('token'); // or any other way to get your auth token
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  function (error) {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    // if (error.response && error.response.status === 401) {
    //   // Handle unauthorized errors
    //   console.log('Unauthorized access - maybe redirect to login');
    // }
    return Promise.reject(error);
  }
);

// HTTP method functions
export const GET = async (url, params) => {
  try {
    const result = await axiosInstance.get(url, { params });
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const DELETE = async (url, params, data) => {
  try {
    const result = await axiosInstance.delete(url, { params, data });
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const POST = async (url, body, options) => {
  try {
    const result = await axiosInstance.post(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const PUT = async (url, body, options) => {
  try {
    const result = await axiosInstance.put(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const PATCH = async (url, body, options) => {
  try {
    const result = await axiosInstance.patch(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export { axiosInstance };

export default axios;

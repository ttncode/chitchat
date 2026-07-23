import axios from 'axios';
import { stringify } from 'qs';

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.apiBase;

  const client = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    withCredentials: true,
  });

  client.interceptors.request.use((config) => {
    const { data } = useAuth();
    const token = data.value?.jwt;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.paramsSerializer = (params) => stringify(params, { encode: false, arrayFormat: 'comma' });

    return config;
  });

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { signOut } = useAuth();

      const status = error.response?.status;
      if (status === 401) {
        signOut({ callbackUrl: '/auth/login' });
      }

      throw error;
    },
  );

  return {
    provide: {
      axios: client,
    },
  };
});

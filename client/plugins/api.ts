import { Api } from '@/api';
import type { AxiosInstance } from 'axios';

export default defineNuxtPlugin(({ provide }) => {
  const { $axios } = useNuxtApp();
  provide('api', new Api($axios as AxiosInstance));
});

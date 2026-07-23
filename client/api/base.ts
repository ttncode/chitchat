import { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export class BaseApi {
  public readonly axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  public async get(endpoint: string, config?: AxiosRequestConfig): Promise<any> {
    try {
      return (await this.axios.get(endpoint, config)).data;
    } catch (error) {
      console.log(error);
    }
  }

  public async post(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    try {
      return (await this.axios.post(endpoint, data, config)).data;
    } catch (error) {
      console.log(error);
    }
  }

  public async put(endpoint: string, data?: any): Promise<any> {
    try {
      return (await this.axios.put(endpoint, data)).data;
    } catch (error) {
      console.log(error);
    }
  }

  public async patch(endpoint: string, data?: any): Promise<any> {
    try {
      return (await this.axios.patch(endpoint, data)).data;
    } catch (error) {
      console.log(error);
    }
  }

  public async delete(endpoint: string, data?: any): Promise<any> {
    try {
      return (await this.axios.delete(endpoint, { data })).data;
    } catch (error) {
      console.log(error);
    }
  }
}

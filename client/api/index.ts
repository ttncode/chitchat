import type { AxiosInstance } from 'axios';
import { AuthAPI } from './auth';
import { MessageAPI } from './message';

export class Api {
  public readonly auth: AuthAPI;
  public readonly message: MessageAPI;

  constructor(axios: AxiosInstance) {
    this.auth = new AuthAPI(axios);
    this.message = new MessageAPI(axios);
  }
}

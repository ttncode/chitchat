import { BaseApi } from '@/api/base';

export class AuthAPI extends BaseApi {
  private prefix = '/auth';

  register(data: any): Promise<any> {
    return this.post(this.prefix + '/register', data);
  }

  login(data: any): Promise<any> {
    return this.post(this.prefix + '/login', data);
  }

  forgot(data: any): Promise<any> {
    return this.post(this.prefix + '/forgot-password', data);
  }

  reset(data: any): Promise<any> {
    return this.post(this.prefix + '/reset-password', data);
  }
}

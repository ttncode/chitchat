import type { Config } from './config.interface';
import * as process from 'process';

const config: Config = {
  nest: {
    port: 5000,
    prefix: '/api',
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Chitchat training service',
    description: 'The Chatchit API for call video and chat realtime',
    version: '1.0',
    path: 'documentation',
    server: '/training',
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  mail: {
    mailHost: process.env.MAIL_HOST,
    mailPort: parseInt(process.env.MAIL_PORT),
    authEmailUser: process.env.AUTH_MAIL_USER,
    authEmailPassword: process.env.AUTH_MAIL_PASSWORD,
    mailFrom: process.env.MAIL_FROM,
  },
};

export default (): Config => config;

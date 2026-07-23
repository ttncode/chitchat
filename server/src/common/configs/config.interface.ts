export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  swagger: SwaggerConfig;
  security: SecurityConfig;
  mail: MailConfig;
}

export interface NestConfig {
  port: number;
  prefix: string;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
  server: string;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}

export interface MailConfig {
  mailHost: string;
  mailPort: number;
  authEmailUser: string;
  authEmailPassword: string;
  mailFrom: string;
}

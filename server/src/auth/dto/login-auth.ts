import { RegisterAuthDto } from './register-auth.dto';
import { OmitType } from '@nestjs/swagger';

export class LoginAuthDto extends OmitType(RegisterAuthDto, [
  'username',
] as const) {}

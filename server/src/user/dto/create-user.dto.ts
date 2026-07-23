import { UserDto } from 'src/common/dto/user.dto';

export class CreateUserDto extends UserDto {
  role?: [string];
}

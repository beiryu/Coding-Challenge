import {
  UserCreateDto,
  UserQueryDto,
  UserResponseDto,
} from '../../dtos/user.dto';

export interface UserRepository {
  getUsers(query: UserQueryDto): Promise<UserResponseDto[]>;
  deletUser(id: string): Promise<void>;
  createUser(user: UserCreateDto): Promise<void>;
  findUserById(id: string): Promise<UserResponseDto | null>;
}

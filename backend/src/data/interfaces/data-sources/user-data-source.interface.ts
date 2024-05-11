import { UserQueryDto, UserResponseDto } from '../../../domain/dtos/user.dto';

export interface UserDataSource {
  getAll(query: UserQueryDto): Promise<UserResponseDto[]>;
  createOne(data: any): Promise<void>;
  getById(id: string): Promise<UserResponseDto | null>;
  deleteOne(id: string): Promise<void>;
}

import { DataResponse } from '../../../common/dtos/data-response.dto';
import { UserQueryDto, UserResponseDto } from '../../dtos/user.dto';

export interface GetAllUsersUseCase {
  execute(query: UserQueryDto): Promise<DataResponse<UserResponseDto[] | null>>;
}

import { DataResponse } from '../../../common/dtos/data-response.dto';
import { UserCreateDto } from '../../dtos/user.dto';

export interface CreateUserUseCase {
  execute(body: UserCreateDto): Promise<DataResponse<null>>;
}

import { DataResponse } from '../../../common/dtos/data-response.dto';

export interface DeleteUserUseCase {
  execute(id: string): Promise<DataResponse<null>>;
}

import { ResponseStatus } from '../enums/response-status.enum';

export class DataResponse<T = null> {
  success: boolean;
  message: string;
  data: T;
  statusCode: number;

  constructor(
    status: ResponseStatus,
    message: string,
    data: T,
    statusCode: number,
  ) {
    this.success = status === ResponseStatus.Success;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }

  static from<T>(
    status: ResponseStatus,
    message: string,
    data: T,
    statusCode: number,
  ): DataResponse<T> {
    return new DataResponse<T>(status, message, data, statusCode);
  }
}

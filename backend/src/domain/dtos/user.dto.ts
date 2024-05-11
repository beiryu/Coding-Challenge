export interface UserQueryDto {
  sortDirect?: string;
  sortKey?: string;
  page?: number;
  size?: number;
}

export interface UserCreateDto {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface UserDeleteDto {
  id: string;
}

export interface UserRequestDto {
  username: string;
  password: string;
}

export interface UserResponseDto {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  deleted: boolean;
}

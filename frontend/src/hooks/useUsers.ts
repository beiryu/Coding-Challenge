import { UserQuery } from "../App";
import { Entity } from "../services/http-service";
import useData from "./useData";

export interface User extends Entity {
  firstname: string;
  lastname: string;
  email: string;
}

const useUsers = (userQuery: UserQuery) =>
  useData<User>(
    "/users",
    {
      params: {
        search: userQuery.searchText,
      },
    },
    [userQuery]
  );

export default useUsers;

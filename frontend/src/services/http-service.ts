import apiClient from "./api-client";

export interface Entity {
  _id: string;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  updateAll<T extends Entity>(entities: T[]) {
    return apiClient.patch(this.endpoint, entities);
  }

  delete(id: string) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  create<T extends Entity>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;

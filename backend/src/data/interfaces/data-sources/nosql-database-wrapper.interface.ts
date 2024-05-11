export interface NoSQLDatabaseWrapper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  find(query: object): Promise<any[]>;
  createOne(data: object): void;
  findOne<T>(id: string): Promise<T | null>;
  deleteOne(id: string): void;
}

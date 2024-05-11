import User from '../../domain/models/user.model';
import { MongoDBUserDataSource } from '../data-sources/mongodb/mongodb-user-data-source';
import { NoSQLDatabaseWrapper } from '../interfaces/data-sources/nosql-database-wrapper.interface';

export async function getUserDatabase(): Promise<MongoDBUserDataSource> {
  const userDatabase: NoSQLDatabaseWrapper = {
    find: (query) => User.find(query).exec(),
    findOne: (id: string) => User.findOne({ _id: id }),
    deleteOne: (id: string) => User.deleteOne({ _id: id }),
    createOne: (data: object) => User.create(data),
  };

  return new MongoDBUserDataSource(userDatabase);
}

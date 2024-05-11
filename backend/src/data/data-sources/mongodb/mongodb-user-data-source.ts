import { UserQueryDto, UserResponseDto } from '../../../domain/dtos/user.dto';
import { NoSQLDatabaseWrapper } from '../../interfaces/data-sources/nosql-database-wrapper.interface';
import { UserDataSource } from '../../interfaces/data-sources/user-data-source.interface';

export class MongoDBUserDataSource implements UserDataSource {
  private db: NoSQLDatabaseWrapper;

  constructor(db: NoSQLDatabaseWrapper) {
    this.db = db;
  }

  async getById(id: string): Promise<UserResponseDto | null> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.db.findOne(id);
    } else {
      return null;
    }
  }

  async createOne(data: any): Promise<void> {
    await this.db.createOne(data);
  }

  async deleteOne(id: string): Promise<void> {
    await this.db.deleteOne(id);
  }

  async getAll(_query: UserQueryDto): Promise<UserResponseDto[]> {
    const result = await this.db.find({});
    return result as unknown as UserResponseDto[];
  }
}

import { IGetUsersRepository } from "@/controllers/getUsers/IgetUsers";
import { User } from "@/models/User";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
      firstName: 'Bianor',
      lastName: 'Junior',
      email: 'email@email.com',
      password: '123456',
    }
    ]
  }
}
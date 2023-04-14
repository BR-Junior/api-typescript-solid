import {IGetUsers, IGetUsersRepository} from "@/controllers/getUsers/IgetUsers";


export class GetUsersController implements IGetUsers {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle(): any {
    try {
      // validar requisição
      // direcionar chamada para o Repository
      const users = await this.getUsersRepository.getUsers()

      return {
        statusCode: 200,
        body: users
      }
    }catch (e) {
      return {
        statusCode: 200,
        body: 'Somethig went wrong.'
      }
    }
  }
}
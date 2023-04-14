import { User } from "@/models/User";
import {HttpResponse} from "@/controllers/interface";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}
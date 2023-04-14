import { User } from "@/models/User";
import {HttpResponse} from "@/controllers/interface";

export interface IGetUsers {
  handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}
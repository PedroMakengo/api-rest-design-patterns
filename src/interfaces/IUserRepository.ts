import { User } from '@prisma/client'

export interface IUserRepository {
  create(name: string, email: string): Promise<User>
  listUsers(): Promise<User[]>
  listUser(email: string): Promise<User>
}

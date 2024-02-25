import prisma from '../database'
import { IUserRepository } from '../interfaces/IUserRepository'
import { User } from '@prisma/client'

class UserRepository implements IUserRepository {
  public async create(name: string, email: string): Promise<User> {
    const user = await prisma.user.create({
      data: { name, email },
    })

    return user
  }

  public async listUsers(): Promise<User[]> {
    const user = await prisma.user.findMany()

    return user
  }

  public async listUser(email: string): Promise<User> {
    const user = await prisma.user.findUnique({ where: { email } })
    return user
  }
}

export default UserRepository

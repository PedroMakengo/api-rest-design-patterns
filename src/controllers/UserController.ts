/* eslint-disable linebreak-style */
import { Request, Response } from 'express'
import UserRepository from '../repositories/UserRepository'
import ListUserService from '../service/users/ListUserService'
import CreateUserService from '../service/users/CreateUserService'

export default {
  async createUser(request: Request, response: Response) {
    try {
      const { name, email } = request.body
      const resultUser = new ListUserService(new UserRepository())
      const userExist = await resultUser.executeByEmail(email)

      if (userExist) {
        return response.json({
          error: true,
          message: 'Erro: Usuário já existe!',
        })
      }

      const result = new CreateUserService(new UserRepository())

      const user = await result.execute(name, email)

      response.json({
        error: false,
        message: 'Successo: Usuário cadastrado com sucesso!',
        user,
      })
    } catch (error) {
      return response.json({ message: error.message })
    }
  },

  async listUsers(request: Request, response: Response) {
    try {
      const result = new ListUserService(new UserRepository())

      const users = await result.execute()

      response.json(users)
    } catch (error) {
      return response.json({ error: true, message: error.message })
    }
  },
}

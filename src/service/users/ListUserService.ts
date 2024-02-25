import UserRepository from '../../repositories/UserRepository'

class ListUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute() {
    const users = await this.userRepository.listUsers()

    return users
  }

  public async executeByEmail(email: string) {
    const user = await this.userRepository.listUser(email)
    return user
  }
}

export default ListUserService

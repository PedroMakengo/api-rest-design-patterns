import UserRepository from '../../repositories/UserRepository'

class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute(name: string, email: string) {
    const users = await this.userRepository.create(name, email)

    return users
  }
}

export default CreateUserService

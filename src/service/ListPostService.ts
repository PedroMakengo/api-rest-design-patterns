import { IPostRepository } from '../interfaces/IPostRepository'

class ListPostService {
  constructor(private postRepository: IPostRepository) {}

  public async execute(id: number) {
    const post = await this.postRepository.list(id)

    return post
  }
}

export default ListPostService

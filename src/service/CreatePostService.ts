import { IPostRepository } from '../interfaces/IPostRepository'
class CreatePostService {
  constructor(private postRepository: IPostRepository) {}

  public async execute(title: string, content: string, userId: number) {
    const post = await this.postRepository.create(title, content, userId)

    return post
  }
}

export default CreatePostService

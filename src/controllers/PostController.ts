/* eslint-disable linebreak-style */
import { Request, Response } from 'express'
import prisma from '../database'

export default {
  async createPosts(request: Request, response: Response) {
    try {
      const { title, content, userId } = request.body
      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId,
        },
      })

      response.json({
        error: false,
        message: 'Post eliminado com sucesso',
        post,
      })
    } catch (error) {
      return response.json({ error: true, message: error.message })
    }
  },

  async deletePosts(request: Request, response: Response) {
    try {
      const { id } = request.params
      const post = await prisma.post.delete({
        where: {
          id: Number(id),
        },
      })
      response.json({
        error: false,
        message: 'Post eliminado com sucesso',
        post,
      })
    } catch (error) {
      return response.json({ error: true, message: error.message })
    }
  },

  async updatePosts(request: Request, response: Response) {
    try {
      const { id } = request.params
      const { title, content } = request.body

      const postExist = await prisma.post.findUnique({
        where: { id: Number(id) },
      })

      if (!postExist) {
        response.json({
          error: false,
          message: 'Error: Post não encontrado!',
          postExist,
        })
      }

      const post = await prisma.post.update({
        where: {
          id: Number(id),
        },
        data: {
          title,
          content,
        },
      })

      response.json({
        error: false,
        message: 'Post atualizado com sucesso',
        post,
      })
    } catch (error) {
      return response.json({ error: true, message: error.message })
    }
  },

  async listPost(request: Request, response: Response) {
    try {
      const { id } = request.params
      const post = await prisma.post.findUnique({ where: { id: Number(id) } })

      if (!post) {
        return response.json({
          error: true,
          message: 'Error: Post não encontrado',
        })
      }
      const posts = await prisma.post.findMany()
      response.json(posts)
    } catch (error) {
      return response.json({ error: true, message: error.message })
    }
  },
}

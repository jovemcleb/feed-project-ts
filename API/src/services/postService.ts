import {prisma} from '../prisma/prismaClient';
import { ICreatePost } from '../interfaces/ICreatePost';

export default class Post {
  static getAllPosts = async () => {
    const allPosts = await prisma.post.findMany();
    return allPosts;
  };

  static getPostById = async (id:string) => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      }
    });
    return post;
  };

  static createPost = async ({content, userId}:ICreatePost) => {
    const newPost = await prisma.post.create({
      data: {
        content,
        userId:Number(userId),
      }
    });
    return newPost;
  }
}
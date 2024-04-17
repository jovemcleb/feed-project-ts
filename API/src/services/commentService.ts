import { prisma } from '../prisma/prismaClient';
import { ICreateComment } from '../interfaces/ICreateComment';
export default class Comment {
  static getAllComments = async () => {
    const allComments = await prisma.comment.findMany();
    return allComments;
  };

  static createComment = async ({
    postId,
    userId,
    content,
  }: ICreateComment) => {
    const newComment = await prisma.comment.create({
      data: {
        postId: Number(postId),
        userId: Number(userId),
        content,
      },
    });

    return newComment;
  };
}

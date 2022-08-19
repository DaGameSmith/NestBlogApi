import { Post, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(createPostInput: CreatePostInput):Promise<Post> {
    return this.prisma.post.create({
      // data: createPostInput,
      data: {
        title: createPostInput.title,
        desc: createPostInput.desc,
        authorId: createPostInput.authorId,
        categories: {
          create: createPostInput.categories,
        },
      },
    });
  }

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({include: { author: true, categories: true,}});
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id
      },include: {
        author: true,
        categories: true,
      },
    });
  }

  update(id: number, data: {id: number; title: string; desc: string; categories: []}): Promise<Post> {
    return this.prisma.post.update({
      where: {
        id
      },
      data: {
        title: data.title,
        desc: data.desc,
        categories: {
          create: data.categories,
        },
      },
    });
  }

  remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id
      },
    });
  }
}

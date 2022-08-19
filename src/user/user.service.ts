import { User, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({include: { posts: true,}});
  }

  async findOne(id: number,): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id
      },include: {
        posts: true,
      },
    });
  }

  async update(id: number , data: {id: number; username: string}): Promise<User> {
    return this.prisma.user.update({
      where: {
        id
      },
      data,
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id
      },
    });
  }
}

import { Category, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryInput: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data: createCategoryInput,
    });
  }

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany({include: { posts: true,}});
  }

  findOne(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: {
        id
      },
    });
  }

  // update(id: number, data: {id: number; name: string}): Promise<Category> {
  //   return this.prisma.category.update({
  //     where: {
  //       id
  //     },
  //     data,
  //   });
  // }

  // remove(id: number): Promise<Category> {
  //   return this.prisma.category.delete({
  //     where: {
  //       id
  //     },
  //   });
  // }
}

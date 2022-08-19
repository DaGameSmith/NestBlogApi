import { Prisma } from '.prisma/client';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UpdateExpression } from 'ts-morph';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation('createCategory')
  create(@Args('createCategoryInput') createCategoryInput: Prisma.CategoryCreateInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query('categories')
  findAll() {
    return this.categoryService.findAll();
  }

  @Query('category')
  findOne(@Args('id') id: number) {
    return this.categoryService.findOne(id);
  }

  // @Mutation('updateCategory')
  // update(@Args('updateCategoryInput') updateCategoryInput: {id: number; name: string}) {
  //   return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  // }

  // @Mutation('removeCategory')
  // remove(@Args('id') id: number) {
  //   return this.categoryService.remove(id);
  // }
}


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CategoryInput {
    name: string;
}

export class CreateCategoryInput {
    name: string;
}

export class PostInput {
    title: string;
    desc: string;
    author: UserInput;
}

export class CreatePostInput {
    title: string;
    desc: string;
    authorId: number;
    categories?: Nullable<Nullable<CategoryInput>[]>;
}

export class UpdatePostInput {
    id: number;
    title?: Nullable<string>;
    desc?: Nullable<string>;
    categories?: Nullable<Nullable<CategoryInput>[]>;
}

export class UserInput {
    id: number;
    email: string;
    username: string;
}

export class CreateUserInput {
    email: string;
    username: string;
}

export class UpdateUserInput {
    id: number;
    username: string;
}

export class Category {
    id?: Nullable<number>;
    name: string;
    posts?: Nullable<Nullable<NestedPost>[]>;
}

export class NestedCategory {
    id?: Nullable<number>;
    name: string;
}

export abstract class IQuery {
    abstract categories(): Nullable<Nullable<Category>[]> | Promise<Nullable<Nullable<Category>[]>>;

    abstract category(id: number): Nullable<Category> | Promise<Nullable<Category>>;

    abstract posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Post {
    id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    title: string;
    desc: string;
    author?: Nullable<NestedUser>;
    categories?: Nullable<Nullable<NestedCategory>[]>;
}

export class NestedPost {
    id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    title: string;
    desc: string;
}

export class User {
    id: number;
    email: string;
    username: string;
    posts?: Nullable<Nullable<NestedPost>[]>;
}

export class NestedUser {
    id: number;
    email: string;
    username: string;
}

export type DateTime = any;
type Nullable<T> = T | null;

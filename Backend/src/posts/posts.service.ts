import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body?: string;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: 1, userId: 1, title: 'Hello from user 1', body: 'Sample body' },
    { id: 2, userId: 1, title: 'Another post', body: 'Sample body' },
    { id: 3, userId: 2, title: 'User2 post', body: 'Sample body' },
  ];
  private idCounter = 4;

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    const p = this.posts.find(x => x.id === id);
    if (!p) throw new NotFoundException('Post not found');
    return p;
  }

  create(dto: CreatePostDto & { userId?: number }): Post {
    const post: Post = { id: this.idCounter++, userId: dto.userId ?? 1, title: dto.title, body: dto.body };
    this.posts.push(post);
    return post;
  }

  update(id: number, dto: UpdatePostDto): Post {
    const idx = this.posts.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Post not found');
    this.posts[idx] = { ...this.posts[idx], ...dto };
    return this.posts[idx];
  }

  remove(id: number): { success: boolean } {
    const idx = this.posts.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Post not found');
    this.posts.splice(idx, 1);
    return { success: true };
  }
}

import { Blog } from "./Blog";

/**
 * CommentのAPIの型定義
 */
export type Comment = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  author: string;
  body: string;
  blog: Blog;
};

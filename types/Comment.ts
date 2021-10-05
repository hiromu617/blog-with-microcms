import { Blog } from "./Blog";

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

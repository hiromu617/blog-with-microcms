import useSWR from "swr";
import { ResponseHeader } from "../types/ResponseHeader";
import { Comment } from "../types/Comment";

type Res = ResponseHeader & {
  contents: Comment[];
};

const commentFetcher = (blogId: string) =>
  fetch(
    `https://jmtyblog.microcms.io/api/v1/comments?filters=blog[equals]${blogId}`,
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY!,
      },
    }
  )
    .then((r) => r.json())
    .then((data: Res) => data.contents);

export const useComments = (blogId: string) => {
  const { data: comments, error } = useSWR(`${blogId}`, commentFetcher);

  return { comments, error };
};

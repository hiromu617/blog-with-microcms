import { useForm, SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";

type CommentInputs = {
  author: string;
  body: string;
};

export const useCommentForm = (blogId: string) => {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentInputs>();

  const onSubmit: SubmitHandler<CommentInputs> = async (data) => {
    const res = await fetch("https://jmtyblog.microcms.io/api/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY!,
      },
      body: JSON.stringify({
        author: data.author,
        body: data.body,
        blog: blogId,
      }),
    });

    console.log(res);
    console.log(res.status);

    if (res.status === 201) {
      alert("コメントを投稿しました");

      // フォームをリセットし、コメントを更新する
      reset();
      mutate(blogId);
    } else {
      alert("エラーが発生しました");
    }
  };
  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWR, { useSWRConfig } from "swr";

type CommentInputs = {
  /**
   * コメントの名前
   */
  author: string;
  /**
   * コメントの内容
   */
  body: string;
};

/**
 * [useForm](https://react-hook-form.com/jp/)の戻り値をラップしたカスタムフック。
 * [useSWR](https://swr.vercel.app/ja)でフォームの値をキャッシュし、マウント時に初期値にセットする
 * @param blogId 
 * @returns 
 */
export const useCommentForm = (blogId: string) => {
  const { data: cache, error } = useSWR<CommentInputs>(`form-cache-${blogId}`);
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CommentInputs>({ defaultValues: { author: "", body: "" } });

  useEffect(() => {
    // cacheがあればフォームの値を更新する
    reset({
      author: cache?.author ? cache.author : "",
      body: cache?.body ? cache.body : "",
    });
  }, []);

  useEffect(() => {
    // フォームの値を変更を検知し、キャッシュを更新する
    const subscription = watch((value, { name, type }) =>
      mutate(`form-cache-${blogId}`, value, false)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

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

import { VFC } from "react";
import styled from "styled-components";
import { useCommentForm } from "../hooks/useCommentForm";

type Props = {
  blogId: string;
};

export const CommentForm: VFC<Props> = ({ blogId }) => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useCommentForm(blogId);
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <CommentInput
          type="text"
          placeholder="お名前"
          defaultValue=""
          {...register("author" as const, { required: true, maxLength: 25 })}
        />
        {errors.author?.type === "required" && (
          <ErrorMessage>この項目は必須です</ErrorMessage>
        )}
        {errors.author?.type === "maxLength" && (
          <ErrorMessage>25文字以内で入力してください</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <CommentTextArea
          placeholder="コメント内容"
          {...register("body" as const, { required: true, maxLength: 140 })}
        />
        {errors.body?.type === "required" && (
          <ErrorMessage>この項目は必須です</ErrorMessage>
        )}
        {errors.body?.type === "maxLength" && (
          <ErrorMessage>140文字以内で入力してください</ErrorMessage>
        )}
      </FormGroup>
      <CommentButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "投稿する"}
      </CommentButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 100%;
  padding: 50px 30px;
  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const CommentInput = styled.input`
  display: block;
  width: 50%;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #856841;
  ::placeholder {
    color: gray;
  }
`;

const CommentTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #856841;
  ::placeholder {
    color: gray;
    font-weight: normal;
  }
`;

const CommentButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  background-color: #856841;
  border-radius: 5px;
  font-size: 1.5rem;
  color: #fff;
  padding: 7px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

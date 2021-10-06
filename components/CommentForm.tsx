import { VFC } from "react";
import styled from "styled-components";

export const CommentForm: VFC = () => {
  return (
    <FormContainer>
      <CommentInput type="text" placeholder="お名前" />
      <CommentTextArea placeholder="コメント内容" />
      <CommentButton>投稿</CommentButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 100%;
  padding: 50px 30px;
`;

const CommentInput = styled.input`
  display: block;
  width: 50%;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #a0a0a0;
  margin-bottom: 20px;
`;

const CommentTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #a0a0a0;
  margin-bottom: 20px;
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

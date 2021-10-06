import { VFC } from "react";
import styled from "styled-components";
import { Comment } from "../types/Comment";
import { parseDateTime } from "../utils/parseDateTime";

type Props = {
  comment: Comment;
};

export const CommentCard: VFC<Props> = ({ comment }) => {
  return (
    <Card key={comment.id}>
      <CommentHeader>
        <h3>{comment.author}</h3>
        <span>・</span>
        <p>{parseDateTime(comment.createdAt)}</p>
      </CommentHeader>
      <p>{comment.body}</p>
    </Card>
  );
};

const Card = styled.div`
  padding: 5px 30px;
  line-height: 1rem;
  border-bottom: 1px dotted #856841;
  @media (max-width: 600px) {
    padding: 5px 10px;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

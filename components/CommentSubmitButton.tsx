import { VFC } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../constants/Colors";
import { Size } from "../constants/Size";

export type Props = {
  /**
   * データをポスト中かどうかのbool値
   */
  isSubmitting: boolean;
};

type StyledProps = {
  disabled: boolean
}

export const CommentSubmitButton: VFC<Props> = ({ isSubmitting }) => {
  return (
    <CommentButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "投稿する"}
    </CommentButton>
  );
};

const CommentButton = styled.button<StyledProps>`
  display: block;
  width: 100%;
  height: 50px;
  line-height: 100%;
  border: none;
  background-color: ${Colors.MAIN_COLOR};
  border-radius: 5px;
  font-size: ${Size.FONT.XL};
  color: #fff;
  padding: 7px;
  &:hover {
    opacity: 0.9;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${Colors.SUB_COLOR};
      color: white;
      &:hover{
        opacity: 1;
      }
    `}
`;

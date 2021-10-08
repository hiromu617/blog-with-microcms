import { VFC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Colors from "../constants/Colors";
import Size from "../constants/Size";

export const BlogTitle: VFC = () => {
  return (
    <TitleContainer>
      <Link href="/" passHref>
        <Headding>ブログのタイトル</Headding>
      </Link>
      <Caption>ブログの説明</Caption>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
`;

const Headding = styled.h1`
  color: ${Colors.TITLE_COLOR};
  font-weight: bold;
  font-size: ${Size.FONT["2XL"]};
`;

const Caption = styled.p`
  color: ${Colors.TITLE_COLOR};
`;

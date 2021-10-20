import { VFC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Blog } from "../types/Blog";
import Image from "next/image";
import { parseDate } from "../utils/parseDate";
import { Colors } from "../constants/Colors";
import { Size } from "../constants/Size";
import { uiState } from "../stores/uiState";

type Props = {
  blog: Blog;
  state: uiState[keyof uiState];
};

export const BlogCard: VFC<Props> = ({ blog, state }) => {

  if(state === "list") return(
    <Link href={`/blog/${blog.id}`} passHref>
      <Flex>
        <Image
          alt="サムネイル"
          src={blog.thumbnail.url}
          width={"300px"}
          height={"320px"}
          objectFit="cover"
        />
        <ListCardContent>
          <ListCardTitle>{blog.title}</ListCardTitle>
          <Divider />
          <ListCardDate>{parseDate(blog.createdAt)}</ListCardDate>
        </ ListCardContent>
      </Flex>
    </Link>
  )

  return (
    <Link href={`/blog/${blog.id}`} passHref>
      <Card>
        <Image
          alt="サムネイル"
          src={blog.thumbnail.url}
          width={"300px"}
          height={"320px"}
          objectFit="cover"
        />
        <CardContent>
          <CardTitle>{blog.title}</CardTitle>
          <Divider />
          <CardDate>{parseDate(blog.createdAt)}</CardDate>
        </CardContent>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  width: 300px;
  height: 450px;
  background-color: ${Colors.CARD_BG_COLOR};
`;

const CardContent = styled.div`
  width: 100%;
  padding: 10px;
`;

const CardTitle = styled.p`
  color: ${Colors.MAIN_COLOR};
  font-weight: bold;
  line-height: 0;
  margin-bottom: 30px;
`;

const Divider = styled.div`
  border-top: 1px dotted ${Colors.MAIN_COLOR};
`;

const CardDate = styled.p`
  font-size: ${Size.FONT.SM};
  color: ${Colors.MAIN_COLOR};
`;

const Flex = styled.div`
  display: flex;
  background-color: ${Colors.CARD_BG_COLOR};
  height: 150px;
`

const ListCardTitle = styled.p`
  color: ${Colors.MAIN_COLOR};
  font-weight: bold;
  line-height: 0;
  font-size: ${Size.FONT["XL"]};
`
const ListCardDate = styled.p`
  font-size: ${Size.FONT.MD};
  color: ${Colors.MAIN_COLOR};
  text-align: right;
  margin-right: 30px;
`

const ListCardContent = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
import { VFC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Blog } from "../types/Blog";
import Image from "next/image";
import { parseDate } from "../utils/parseDate";
import Colors from "../constants/Colors";
import Size from "../constants/Size";

type Props = {
  blog: Blog;
};

export const BlogCard: VFC<Props> = ({ blog }) => {
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

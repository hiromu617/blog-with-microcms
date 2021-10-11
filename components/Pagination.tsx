import { VFC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Colors } from "../constants/Colors";
import { Size } from "../constants/Size";
import { genArrayFromRange } from "../utils/genArrayfromRange";

type Props = {
  totalCount: number;
  path: string;
};

type PaginationListItemProps = {
  active: boolean;
};

const PER_PAGE = 5;

export const Pagination: VFC<Props> = ({ totalCount, path }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentPage: number = id ? +id : 1;

  return (
    <PaginationList>
      {genArrayFromRange(1, Math.ceil(totalCount / PER_PAGE)).map(
        (number, index) => (
          <PaginationListItem key={index} active={currentPage === number}>
            <Link href={`/${path}/page/${number}`}>
              <a>{number}</a>
            </Link>
          </PaginationListItem>
        )
      )}
    </PaginationList>
  );
};

const PaginationList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PaginationListItem = styled.li<PaginationListItemProps>`
  display: inline-block;
  width: 50px;
  height: 50px;
  font-size: ${Size.FONT.LG};
  border-radius: 100%;
  text-align: center;
  line-height: 50px;
  ${(props) =>
    props.active &&
    css`
      background: ${Colors.MAIN_COLOR};
      color: white;
    `}
`;

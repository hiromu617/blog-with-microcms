import { VFC } from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  totalCount: number;
  path: string;
};

const PER_PAGE = 5;

export const Pagination: VFC<Props> = ({ totalCount, path}) => {

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <PaginationList>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <PaginationListItem key={index}>
          <Link href={`/${path}/page/${number}`}>
            <a>{number}</a>
          </Link>
        </PaginationListItem>
      ))}
    </PaginationList>
  );
};

const PaginationList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`

const PaginationListItem = styled.li`
  font-size: 1.25rem;
`

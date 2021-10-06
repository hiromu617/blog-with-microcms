import { VFC } from "react";
import Link from "next/link";

type Props = {
  totalCount: number;
  path: string;
};

const PER_PAGE = 5;

export const Pagination: VFC<Props> = ({ totalCount, path}) => {

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/${path}/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

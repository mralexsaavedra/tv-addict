import { SVGProps } from 'react';

const List = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-list"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
  </svg>
);

export { List };

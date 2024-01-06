import { SVGProps } from 'react';

const TrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    className="icon icon-tabler icon-tabler-trending-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);

export { TrendingUp };

import type { SVGProps } from 'react';
const SvgIcLeftarrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 16"
    {...props}
  >
    <path stroke="#E5E7EB" d="M10 16H0V0h10z" />
    <path
      fill="#fff"
      d="M.294 7.294c-.39.39-.39 1.025 0 1.416l6 6a1.002 1.002 0 0 0 1.416-1.416L2.416 8l5.29-5.293A1.002 1.002 0 0 0 6.291 1.29l-6 6z"
    />
  </svg>
);
export default SvgIcLeftarrow;

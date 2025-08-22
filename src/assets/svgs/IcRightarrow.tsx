import type { SVGProps } from 'react';
const SvgIcRightarrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 11 16"
    {...props}
  >
    <g clipPath="url(#ic_rightarrow_svg__a)">
      <path
        fill="currentColor"
        d="M9.925 7.294c.391.39.391 1.025 0 1.416l-6 6a1.002 1.002 0 0 1-1.415-1.416L7.804 8 2.513 2.707A1.002 1.002 0 0 1 3.929 1.29l6 6z"
      />
    </g>
    <defs>
      <clipPath id="ic_rightarrow_svg__a">
        <path fill="#fff" d="M.219 0h10v16h-10z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcRightarrow;

import type { SVGProps } from 'react';
const SvgIcInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 15"
    {...props}
  >
    <g clipPath="url(#ic_info_svg__a)">
      <path
        fill="#6B7280"
        d="M7 14.75a7 7 0 1 0 0-14 7 7 0 0 0 0 14M5.906 9.938h.657v-1.75h-.657a.655.655 0 0 1-.656-.657c0-.363.293-.656.656-.656H7.22c.363 0 .656.293.656.656v2.407h.219c.363 0 .656.292.656.656a.655.655 0 0 1-.656.656H5.906a.655.655 0 0 1-.656-.656c0-.364.293-.656.656-.656M7 4.25A.875.875 0 1 1 7 6a.875.875 0 0 1 0-1.75"
      />
    </g>
    <defs>
      <clipPath id="ic_info_svg__a">
        <path fill="#fff" d="M0 .75h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcInfo;

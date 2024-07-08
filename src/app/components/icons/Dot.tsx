import * as React from "react";

const Dot = (props: any) => (
  <svg
    width={23}
    height={21}
    viewBox="0 0 23 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_1_15805)">
      <rect x={7} y={7.5} width={9} height={9} rx={4.5} fill="#1ED960" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_15805"
        x={0}
        y={0.5}
        width={23}
        height={23}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.117647 0 0 0 0 0.85098 0 0 0 0 0.376471 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_15805"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_15805"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Dot;

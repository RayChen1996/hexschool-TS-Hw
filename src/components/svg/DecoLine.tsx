import React from "react";

type LineSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: LineSvgProps) {
  return (
    <svg
      width="140"
      height="2"
      viewBox="0 0 140 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1"
        x2="139"
        y2="1"
        stroke="url(#paint0_linear_40_3743)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_40_3743"
          x1="0"
          y1="2"
          x2="140"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BE9C7C" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default SvgComponent;

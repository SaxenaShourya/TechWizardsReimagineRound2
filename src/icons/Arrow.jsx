import React from "react";

const Arrow = ({ className, stroke }) => {
  return (
    <svg
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_4)">
        <path
          d="M3.92425 28.0756L23.2495 8.75041"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75032 8.7504L23.2495 8.7504L23.2495 25.2496"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4">
          <rect
            width="29"
            height="31"
            fill={stroke}
            transform="translate(29 31.5) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow;

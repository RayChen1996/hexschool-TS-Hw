type LineSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: LineSvgProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="16" fill="#BF9D7D" />
      <rect width="32" height="32" rx="16" fill="black" fill-opacity="0.2" />
      <g clip-path="url(#clip0_1169_3680)">
        <path
          d="M14.0009 18.8L11.2009 16L10.2676 16.9333L14.0009 20.6667L22.0009 12.6667L21.0676 11.7333L14.0009 18.8Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1169_3680">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgComponent;

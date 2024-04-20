type LineSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: LineSvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_32_2627)">
        <path
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="#BF9D7D"
        />
        <path
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="black"
          fill-opacity="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_2627">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgComponent;
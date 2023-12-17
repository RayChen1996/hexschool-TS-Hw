type LineSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: LineSvgProps) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.99844 11.2L1.79844 6.99998L0.398438 8.39998L5.99844 14L17.9984 1.99998L16.5984 0.599976L5.99844 11.2Z"
        fill="#BF9D7D"
      />
      <path
        d="M5.99844 11.2L1.79844 6.99998L0.398438 8.39998L5.99844 14L17.9984 1.99998L16.5984 0.599976L5.99844 11.2Z"
        fill="black"
        fill-opacity="0.2"
      />
    </svg>
  );
}
export default SvgComponent;

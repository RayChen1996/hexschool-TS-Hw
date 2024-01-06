type LineSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: LineSvgProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
        fill="white"
      />
    </svg>
  );
}
export default SvgComponent;

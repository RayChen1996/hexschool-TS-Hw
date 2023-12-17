type LineSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: LineSvgProps) {
  return (
    <svg
      width="1500"
      height="677"
      viewBox="0 0 1920 677"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1638.95 58.8791C1758.2 85.2301 1876 80.4951 1920 74.8338V677H0V86.1564C43.7363 82.3822 152.171 67.1138 236.021 36.2338C340.833 -2.36622 544.246 4.32449 701.852 23.8818C859.458 43.4391 937.873 21.8232 1149.83 4.32449C1361.78 -13.1742 1489.88 25.9405 1638.95 58.8791Z"
        fill="url(#paint0_linear_232_3715)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_232_3715"
          x1="1299"
          y1="-280.5"
          x2="1238.92"
          y2="108.481"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#987D63" />
          <stop offset="1" stop-color="#DBCDC1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default SvgComponent;

export function LoadIndicatorIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="76"
      fill="none"
      viewBox="0 0 76 76"
      className="loadIndicator"
      {...props}
    >
      <path
        stroke="url(#paint0_linear)"
        strokeWidth="3"
        d="M38 74C18.118 74 2 57.882 2 38S18.118 2 38 2s36 16.118 36 36c0 7.4-2.233 14.28-6.062 20"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="2"
          x2="74"
          y1="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6647"></stop>
          <stop offset="1" stopColor="#D6008F"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

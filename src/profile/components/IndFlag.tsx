import { cn } from "@/lib/utils";

export default function IndFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 20"
      className={cn(className)}
      aria-label="Flag of India"
    >
      {/* <!-- three horizontal bands: saffron, white, green --> */}
      <rect x="0" y="0" width="30" height="6.6666667" fill="#F15B25" />
      <rect x="0" y="6.6666667" width="30" height="6.6666667" fill="#FFF" />
      <rect x="0" y="13.3333333" width="30" height="6.6666667" fill="#006934" />

      {/* <!-- Ashoka Chakra (navy wheel) centered at (15,10) --> */}
      {/* <!-- Chakra diameter = 3/5 of flag height -> height = 20 so diameter = 12, radius = 6 --> */}
      <g transform="translate(0,0)">
        {/* <!-- outer rim --> */}
        <circle
          cx="15"
          cy="10"
          r="6"
          fill="none"
          stroke="#054187"
          strokeWidth="0.4"
        />
        {/* <!-- spokes: one spoke then reused rotated 24 times --> */}
        <defs>
          <g id="spoke">
            {/* <!-- a spoke from center up to rim --> */}
            <line
              x1="15"
              y1="10"
              x2="15"
              y2="4"
              stroke="#054187"
              strokeWidth="0.25"
              strokeLinecap="round"
            />
          </g>
        </defs>

        {/* <!-- produce 24 spokes (360/24 = 15° increments) --> */}
        <use href="#spoke" transform="rotate(0 15 10)" />
        <use href="#spoke" transform="rotate(15 15 10)" />
        <use href="#spoke" transform="rotate(30 15 10)" />
        <use href="#spoke" transform="rotate(45 15 10)" />
        <use href="#spoke" transform="rotate(60 15 10)" />
        <use href="#spoke" transform="rotate(75 15 10)" />
        <use href="#spoke" transform="rotate(90 15 10)" />
        <use href="#spoke" transform="rotate(105 15 10)" />
        <use href="#spoke" transform="rotate(120 15 10)" />
        <use href="#spoke" transform="rotate(135 15 10)" />
        <use href="#spoke" transform="rotate(150 15 10)" />
        <use href="#spoke" transform="rotate(165 15 10)" />
        <use href="#spoke" transform="rotate(180 15 10)" />
        <use href="#spoke" transform="rotate(195 15 10)" />
        <use href="#spoke" transform="rotate(210 15 10)" />
        <use href="#spoke" transform="rotate(225 15 10)" />
        <use href="#spoke" transform="rotate(240 15 10)" />
        <use href="#spoke" transform="rotate(255 15 10)" />
        <use href="#spoke" transform="rotate(270 15 10)" />
        <use href="#spoke" transform="rotate(285 15 10)" />
        <use href="#spoke" transform="rotate(300 15 10)" />
        <use href="#spoke" transform="rotate(315 15 10)" />
        <use href="#spoke" transform="rotate(330 15 10)" />
        <use href="#spoke" transform="rotate(345 15 10)" />

        {/* <!-- small hub --> */}
        <circle cx="15" cy="10" r="0.8" fill="#054187" />
      </g>
    </svg>
  );
}

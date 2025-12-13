import Image from "next/image";
import { FlipSentences } from "@/features/portfolio/components/flip-sentences";
import { USER } from "@/features/portfolio/data/user";
import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-edge border-x">
      <div className="shrink-0 border-edge border-r">
        <div className="mx-0.5 my-[3px]">
          <Image
            className="size-32 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
            width={160}
            height={160}
            quality={100}
            unoptimized
          />
        </div>

        <a
          href="https://en.wikipedia.org/wiki/India"
          target="_blank"
          rel="noreferrer"
          className="-left-px absolute top-0"
        >
          <IndFlag />
        </a>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 select-none font-mono text-xs text-zinc-300 max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-edge border-t">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px font-semibold text-3xl">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 select-none text-info"
              aria-label="Verified"
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-12.5 border-edge border-t py-1 pl-4 sm:h-9">
            <FlipSentences
              className="text-balance font-mono text-muted-foreground text-sm"
              sentences={USER.flipSentences}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const IndFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 20"
    aria-label="Flag of India"
  >
    <title>Flag of India</title>
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

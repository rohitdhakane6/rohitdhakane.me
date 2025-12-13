"use client";

import { Volume2Icon } from "lucide-react";

import { useSound } from "@/hooks/use-sound";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const play = useSound(namePronunciationUrl);

  return (
    <button
      className={cn(
        "relative select-none text-muted-foreground transition-[color,scale] hover:text-foreground active:scale-[0.9]",
        "after:-inset-1 after:absolute",
        className,
      )}
      onClick={() => {
        play();
        trackEvent({
          name: "play_name_pronunciation",
        });
      }}
      type="button"
    >
      <Volume2Icon className="size-4.5" />
      <span className="sr-only">Pronounce my name</span>
    </button>
  );
}

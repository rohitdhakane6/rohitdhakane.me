import { useCallback } from "react";

import soundManager from "@/lib/sound-manager";

export function useClickSound() {
  return useCallback(() => {
    soundManager.playAudio(
      "https://pub-b95b26cb348242c59499397cac963ab5.r2.dev/audio/click.wav", // Source: iOS UI Sounds
    );
  }, []);
}

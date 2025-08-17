import { useCallback } from "react";

import soundManager from "@/lib/sound-manager";

export function useClickSound() {
  return useCallback(() => {
    soundManager.playAudio(
      "https://assets.rohitdhakane.me/audio/click.wav", // Source: iOS UI Sounds
    );
  }, []);
}

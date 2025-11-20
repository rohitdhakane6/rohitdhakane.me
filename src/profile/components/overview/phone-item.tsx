"use client";

import { PhoneIcon } from "lucide-react";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

type PhoneItemProps = {
  phoneNumber: string;
};

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  return (
    <IntroItem>
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={`tel:${phoneNumber}`}
          aria-label={`Call ${phoneNumber}`}
        >
          {phoneNumber}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}

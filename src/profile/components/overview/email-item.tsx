"use client";

import { MailIcon } from "lucide-react";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

type EmailItemProps = {
  email: string;
};

export function EmailItem({ email }: EmailItemProps) {
  return (
    <IntroItem>
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={`mailto:${email}`}
          aria-label={`Send email to ${email}`}
        >
          {email}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}

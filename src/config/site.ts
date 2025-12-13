import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://rohitdhakane.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "rohitdhakane6/rohitdhakane.me";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/rohitdhakane6/rohitdhakane.me";
export const GITHUB_USERNAME = "rohitdhakane6";
export const UTM_PARAMS = {
  utm_source: "rohitdhakane.in",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

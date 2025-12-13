import "./globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { WebSite, WithContext } from "schema-dts";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";
import { fontMono, fontSans } from "@/lib/font";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  };
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = `
  try {
    if (
      localStorage.theme === 'dark' ||
      (
        (!('theme' in localStorage) || localStorage.theme === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    ) {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '${META_THEME_COLORS.dark}');
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos');
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "Rohit Dhakane",
      url: SITE_INFO.url,
    },
  ],
  creator: "Rohit Dhakane",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@RohitDhakane_",
    images: [SITE_INFO.ogImage],
  },

  // ✅ Add R2 icons + manifest
  icons: {
    icon: [
      {
        url: "https://pub-b95b26cb348242c59499397cac963ab5.r2.dev/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://pub-b95b26cb348242c59499397cac963ab5.r2.dev/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://pub-b95b26cb348242c59499397cac963ab5.r2.dev/favicon/favicon.ico",
        sizes: "any",
      },
    ],
    apple: {
      url: "https://pub-b95b26cb348242c59499397cac963ab5.r2.dev/favicon/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script type="text/javascript">{darkModeScript}</Script>
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <Script type="application/ld+json">
          {JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c")}
        </Script>
      </head>

      <body>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}

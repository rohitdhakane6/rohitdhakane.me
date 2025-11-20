import dayjs from "dayjs";
import Script from "next/script";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { About } from "@/profile/components/about";
import { Blog } from "@/profile/components/blog";
import { Certifications } from "@/profile/components/certifications";
import { Experiences } from "@/profile/components/experiences";
import { Overview } from "@/profile/components/overview";
import { ProfileHeader } from "@/profile/components/profile-header";
import { Projects } from "@/profile/components/projects";
import { SocialLinks } from "@/profile/components/social-links";
import { TechStack } from "@/profile/components/tech-stack";

export default function Page() {
  return (
    <>
      <Script type="application/ld+json">
        {JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c")}
      </Script>

      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        {/* <ProfileCover /> */}
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        {/* <GitHubContributions />
        <Separator />

        <TestimonialsMarquee />
        <Separator /> */}

        <TechStack />
        <Separator />

        <Blog />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        {/* <Awards />
        <Separator /> */}

        <Certifications />
        <Separator />

        {/* <Brand />
        <Separator /> */}
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-edge border-x",
        "before:-left-[100vw] before:-z-1 before:absolute before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className,
      )}
    />
  );
}

import dayjs from "dayjs";
import { WithContext, ProfilePage as PageSchema } from "schema-dts";
import { cn } from "@/lib/utils";

import { USER } from "@/data/user";
import { Overview } from "@/profile/components/overview";

import { ProfileHeader } from "@/profile/components/profile-header";
import { About } from "@/profile/components/about";
import { TechStack } from "@/profile/components/tech-stack";
import { Projects } from "@/profile/components/projects";
import { Experiences } from "@/profile/components/experiences";
import { Certifications } from "@/profile/components/certifications";
import { Blog } from "@/profile/components/blog";
import { SocialLinks } from "@/profile/components/social-links";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto md:max-w-3xl">
        <ProfileHeader />
        <Overview />
        <Separator />
        <About />
        <Separator />
        <SocialLinks />
        <Separator />
        <TechStack />
        <Separator />
        <Projects />
        <Separator />
        <Blog />
        <Separator />
        <Experiences />
        <Separator />
        <Certifications />
        <Separator />
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
        "border-edge relative flex h-8 w-full border-x",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className,
      )}
    />
  );
}

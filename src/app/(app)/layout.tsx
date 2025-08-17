import dynamic from "next/dynamic";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto border-x border-edge md:max-w-3xl">
          <div
            className={cn(
              "h-8 px-2",
              "screen-line-after",
              "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
              "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
            )}
          />

          {children}
        </div>
      </main>
      <SiteFooter />
      <ScrollTop />
    </>
  );
}

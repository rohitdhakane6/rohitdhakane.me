import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-edge border-x pt-4 md:max-w-3xl">
        <p className="mb-1 text-balance px-4 text-center font-mono text-muted-foreground text-sm">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>

        <p className="mb-4 text-balance px-4 text-center font-mono text-muted-foreground text-sm">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/RohitDhakane_"
            target="_blank"
            rel="noopener"
          >
            Rohit
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

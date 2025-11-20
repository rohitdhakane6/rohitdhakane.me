import type { Metadata } from "next";
import { USER } from "@/data/user";

export const metadata: Metadata = {
  title: "Resume",
  description: "My professional experience, skills, and education.",
};

export default function Page() {
  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="font-semibold text-3xl">Resume</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="text-balance font-mono text-muted-foreground text-sm">
          {metadata.description}
        </p>
      </div>

      <div className="w-full">
        <iframe
          title="Resume"
          src={USER.resumeUrl}
          className="min-h-screen w-full"
        />
      </div>

      <div className="h-4" />
    </>
  );
}

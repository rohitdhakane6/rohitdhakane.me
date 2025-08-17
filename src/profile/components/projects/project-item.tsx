import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  InfinityIcon,
  LinkIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";

import type { Project } from "../../types/projects";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <Collapsible defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="text-muted-foreground mx-4 flex size-6 shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              <Icons.project className="size-5" />
            </div>
          )}

          <div className="border-edge flex-1 border-l border-dashed">
            <CollapsibleTrigger className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                <dl className="text-muted-foreground text-sm">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          className="size-4.5 translate-y-[0.5px]"
                          aria-hidden
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              <SimpleTooltip content="Open Project Link">
                <a
                  className="text-muted-foreground hover:text-foreground relative flex size-6 shrink-0 items-center justify-center after:absolute after:-inset-2"
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              </SimpleTooltip>

              <div
                className="text-muted-foreground shrink-0 [&_svg]:size-4"
                aria-hidden
              >
                <ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden duration-300">
          <div className="border-edge space-y-4 border-t border-dashed p-4">
            {project.videoSrc && project.thumbnailSrc ? (
              <div className="relative">
                <HeroVideoDialog
                  videoSrc={project.videoSrc}
                  thumbnailSrc={project.thumbnailSrc}
                />
              </div>
            ) : null}
            {project.thumbnailSrc && !project.videoSrc ? (
              <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
                <Image
                  src={project.thumbnailSrc}
                  alt={project.title}
                  width={1200}
                  height={630}
                  quality={100}
                  priority={true}
                  unoptimized
                />

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
              </div>
            ) : null}

            {project.description && (
              <Prose>
                <Markdown>{project.description}</Markdown>
              </Prose>
            )}

            {project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

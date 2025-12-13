import { format } from "date-fns";
import { AwardIcon, FileCheckIcon } from "lucide-react";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProseMono } from "@/components/ui/typography";

import type { Award } from "../../types/awards";

export function AwardItem({
  className,
  award,
}: {
  className?: string;
  award: Award;
}) {
  const canExpand = !!award.description;

  return (
    <CollapsibleWithContext disabled={!canExpand} asChild>
      <div className={className}>
        <div className="flex items-center hover:bg-accent2">
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
            aria-hidden
          >
            <AwardIcon className="pointer-events-none size-4 text-muted-foreground" />
          </div>

          <div className="flex-1 border-edge border-l border-dashed">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 text-balance font-medium leading-snug">
                  {award.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-sm">
                  <dl>
                    <dt className="sr-only">Prize</dt>
                    <dd>{award.prize}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Awarded in</dt>
                    <dd>
                      <time dateTime={new Date(award.date).toISOString()}>
                        {format(new Date(award.date), "MM.yyyy")}
                      </time>
                    </dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Received in Grade</dt>
                    <dd>{award.grade}</dd>
                  </dl>
                </div>
              </div>

              {award.referenceLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      className="after:-inset-2 relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute hover:text-foreground"
                      href={award.referenceLink}
                      target="_blank"
                      rel="noopener"
                    >
                      <FileCheckIcon
                        className="pointer-events-none size-4"
                        aria-hidden
                      />
                      <span className="sr-only">Open Reference Attachment</span>
                    </a>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Open Reference Attachment</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {canExpand && (
                <div
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <CollapsibleChevronsIcon />
                </div>
              )}
            </CollapsibleTrigger>
          </div>
        </div>

        {canExpand && (
          <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="border-edge border-t shadow-inner">
              <ProseMono className="p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                <Markdown>{award.description}</Markdown>
              </ProseMono>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </CollapsibleWithContext>
  );
}

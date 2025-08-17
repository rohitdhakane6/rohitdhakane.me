import {
  GlobeIcon,
  MapPinIcon,
  MarsIcon,
  VenusIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <IntroItem
          icon={PhoneIcon}
          content={USER.phoneNumber}
          href={`tel:${USER.phoneNumber}`}
        />

        <IntroItem
          icon={MailIcon}
          content={USER.email}
          href={`mailto:${USER.email}`}
        />

        <IntroItem
          icon={GlobeIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        />

        <IntroItem
          icon={USER.gender === "male" ? MarsIcon : VenusIcon}
          content={USER.pronouns}
        />
      </PanelContent>
    </Panel>
  );
}

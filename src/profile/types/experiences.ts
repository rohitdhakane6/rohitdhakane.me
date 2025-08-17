export type ExperiencePositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: {
    start: string;
    end?: string;
  };
  employmentType?: string;
  employmentUrl?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyUrl?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
};

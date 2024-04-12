export type SubSection = {
  subSectionName: string;
  value?: number;
  valueDesc?: string;
};

export type Section = {
  sectionName: string;
  subSections?: SubSection[];
  result?: number;
  subTitle?: string;
};

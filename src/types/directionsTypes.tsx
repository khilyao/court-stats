export type SubSection = {
  subSectionName: string;
  value?: number;
  signature?: string;
};

export type Section = {
  sectionName: string;
  subSections?: SubSection[];
  result?: number;
  subTitle?: string;
};

export type Direction = {
  direction: string;
  name: string;
  sections: Section[];
};

export type Record = {
  date: string;
  directions: Direction[];
};

export type Year = {
  year: number | string;
  months: Record[];
};

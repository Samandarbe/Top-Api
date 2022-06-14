export enum TopLevelCatecory {
  Courses,
  Service,
  Books,
  Produck,
}
export class TopPageModel {
  _id: string;
  firstLevelCategory: TopLevelCatecory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };

  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}

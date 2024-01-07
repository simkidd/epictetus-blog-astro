export interface PostType {
  frontmatter: any; // Replace 'any' with the actual type
  file: any; // Replace 'any' with the actual type
  url: any; // Replace 'any' with the actual type
  rawContent: any; // Replace 'any' with the actual type
  compiledContent: any; // Replace 'any' with the actual type
  getHeadings: any; // Replace 'any' with the actual type
  Content: any; // Replace 'any' with the actual type
  default: any; // Replace 'any' with the actual type
  [Symbol.toStringTag]: string;
}

export interface PaginationUrlType {
  current: string;
  next?: string;
  prev?: string;
}

export interface PageType {
  data: PostType[];
  start: number;
  end: number;
  size: number;
  total: number;
  currentPage: number;
  lastPage: number;
  url: PaginationUrlType;
}

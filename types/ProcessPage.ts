import { MainMedia } from "./SharedTypes";

export interface ProcessPageDataType {
  strapiChapterCategory: StrapiChapterCategory;
  allStrapiChapter: AllStrapiChapter;
}

export interface TechnicalSkillsPageDataType {
  page_content: string;
  page_title: string;
  main_image: MainMedia;
}

export interface StrapiChapterDataType {
  strapiChapter: StrapiChapter;
  allStrapiChapter: AllStrapiChapter;
}

interface StrapiChapter {
  content: string;
  name: string;
  order: number;
  tags: ChapterCategory[];
  chapter_category: ChapterCategory;
  main_media: MainMedia;
}

export interface AllStrapiChapter {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  id: string;
  order: number;
  name: string;
  description: string;
  chapter_category: ChapterCategory;
}

interface ChapterCategory {
  name: string;
}

interface StrapiChapterCategory {
  content: string;
  name: string;
  main_media: MainMedia;
}

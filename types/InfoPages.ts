import { MainMedia } from "./SharedTypes";

export interface AboutPageDataType {
  strapiAboutPage: {
    id: string;
    content: string;
    title: string;
    main_media: MainMedia;
  };
}

export interface CoachPageDataType {
  strapiCoachesPage: { coaches: Coach[]; page_title: string };
}

interface Coach {
  coach_bio: string;
  coach_image: MainMedia;
  coach_name: string;
}

export interface HistoryPageDataType {
  allStrapiHistory: AllStrapiHistory;
  strapiHistoryPage: StrapiHistoryPage;
}

interface AllStrapiHistory {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  title: string;
  description: string;
  main_image: MainMedia;
}

export interface StrapiHistoryPage {
  page_title: string;
  page_content: string;
}

export interface SingleHistoryPageDataType {
  strapiHistory: StrapiHistory;
}

interface StrapiHistory {
  description: string;
  content: string;
  title: string;
  main_image: MainMedia;
}

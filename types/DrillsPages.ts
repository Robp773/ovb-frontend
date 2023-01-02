import { MainMedia } from "./SharedTypes";

export interface DrillsHomePageDataType {
  allStrapiDrillCategory: AllStrapiDrillCategory;
  strapiDrillsPage: StrapiDrillsPage;
  localSearchDrills: LocalSearchDrills;
}

interface AllStrapiDrillCategory {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  description: string;
  name: string;
  one_sentence_description: string;
  image: MainMedia;
}

interface LocalSearchDrills {
  id: string;
  name: string;
  store: any;
  index: string;
}

export interface Drill {
  name: string;
  competency: string;
  category: string;
  tags: string[];
  groupTypes: GroupType[];
  time_estimate: number;
  isGroup: boolean;
  isIndividual: boolean;
  isTeam: boolean;
  description: string;
  summary: string;
  steps: Step[];
}

enum GroupType {
  Group = "Group",
  Individual = "Individual",
  Team = "Team",
}

interface Step {
  description: string;
  media: MainMedia | null;
  title: string;
}

interface StrapiDrillsPage {
  drills_page_description: string;
  page_title: string;
}

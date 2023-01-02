import { LocalFile, MainMedia } from "./SharedTypes";

export interface HomePageDataType {
  allStrapiArticle: HomePageArticles;
  strapiHomePage: HomePageInfo;
}

interface HomePageArticles {
  strapiId: number;
  ropes_course_activities: RopesCourseActivity[];
  content: string;
  category: Category;
  created_at: string;
  date: string;
  title: string;
  description: string;
  tags: Category[];
  main_media: MainMedia;
}

interface Category {
  name: string;
}

interface RopesCourseActivity {
  content: string;
  created_at: string;
  title: string;
}

interface HomePageInfo {
  id: string;
  intro_text: string;
  banner_image: BannerImage;
}

interface BannerImage {
  localFile: LocalFile;
}

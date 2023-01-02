import { IGatsbyImageData } from "gatsby-plugin-image";

export interface MainMedia {
  localFile: LocalFile;
}

export interface LocalFile {
  childImageSharp: ChildImageSharp;
}

export interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData;
}

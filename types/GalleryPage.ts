import { LocalFile } from "./SharedTypes";

export interface GalleryPageDataType {
  strapiGalleryPage: StrapiGalleryPage;
}

export interface StrapiGalleryPage {
  page_title: string;
  main_gallery: GalleryImage[];
}

export interface GalleryImage {
  gallery_image_date: string;
  gallery_image_title: string;
  gallery_image: GalleryImageData;
}

export interface GalleryImageData {
  caption: string;
  localFile: LocalFile;
}

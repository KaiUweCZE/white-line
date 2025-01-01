export interface Article {
  headline: string;
  text: string;
  time: string;
  year: number;
  images: string[];
  labels: string[];
  galleryOptions: {
    width: number;
    height: number;
    expander: boolean;
  };
  tags: {
    name: string;
    type: string;
  };
}

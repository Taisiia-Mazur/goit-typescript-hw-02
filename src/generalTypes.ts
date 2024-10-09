export interface IPhoto {
  id: string;
  likes: number;
  description: string | undefined;
  alt_description: string | undefined;
  urls: {
    regular: string;
    small: string;
  };
}

export interface TypeForApi {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

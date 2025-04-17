export interface IGalleryRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IGalleryData;
}

export interface IGalleryData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  home: string;
  createdAt: string;
  updatedAt: string;
}

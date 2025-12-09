export interface IEventHeaderType {
  id: string;
  title: string;
  subtitle: string;
  events: {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    date: string;
  }[];
}

export interface IEventDetailsType {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  eventCategory: String;
  eventGallery: {
    object: "eventGallery";
    id: string;
    eventImages: string[];
    videos: string[];
    createdAt: string;
    updatedAt: string;
  };
}

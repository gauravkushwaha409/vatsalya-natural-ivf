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
    // {
    //     "object": "eventGallery",
    //     "id": "69301f74efe252c5d8a43b54",
    //     "eventImages": [
    //         "http://192.168.1.121:5000/images/1764761460703-ss.png"
    //     ],
    //     "videoUrl": [
    //         "https://www.youtube.com/shorts/DEdHAWH33nk?feature=share"
    //     ],
    //     "createdAt": "2025/12/03 05:16:00",
    //     "updatedAt": "2025/12/03 05:16:00"
    // }

    id: string;
  }[];
}

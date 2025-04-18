interface Endpoints {
  getData: string;
  contactus: string;
  center: string;
  setting: string;
  request_call: string;
  doctor: string;
  available_dates: string;
  appointment: string;
  blog: string;
  faq: string;
  service: string;
  whenToSee: string;
  experts: string;
  subscription: string;
  carrer: string;
  joinUs: string;
  openPosition: string;
  aboutUs: IAboutUS;
  stats: string;
  sucessStory: string;
  sucessStoryMeta: string;
  home: string;
  howWorks: string;
  consultationBooking: string;
  homeGallery: string;
  rating: string;
}

export interface IAboutUS {
  aboutUs: string;
  mission: string;
  family: string;
  whyUs: string;
}

export const endpoints: Endpoints = {
  getData: "/getData",
  contactus: "/contact-us",
  center: "/center",
  setting: "/setting",
  request_call: "/request-call",
  doctor: "/expert",
  available_dates: "/request-appointment/available-slots",
  appointment: "/request-appointment",
  subscription: "/subscription",
  blog: "/blog",
  faq: "/faq",
  service: "/service",
  whenToSee: "/when-to-see-service",
  experts: "/expert",
  carrer: "/career",
  joinUs: "/join-us",
  openPosition: "/vacancy",
  sucessStory: "/success-story",
  sucessStoryMeta: "/success-story-meta-info",
  aboutUs: {
    aboutUs: "/about-us",
    mission: "/mission",
    family: "/family",
    whyUs: "/why-us",
  },
  stats: "/stats",
  home: "/home",
  howWorks: "/how-works",
  consultationBooking: "/consultation-booking",
  homeGallery: "/home-gallery",
  rating: "/rating",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

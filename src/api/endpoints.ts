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
  chatbot: {
    register: string;
  };
  management_team: string;
  leader: string;
  service_header: string;
  service_test: string;
  service_stage: string;
  article: string;
  why_choose_us: string;
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
  // Chatbot
  chatbot: {
    register: "/user/register",
  },
  management_team: "/team",
  leader: "/leader",
  service_header: "/service-header",
  service_test: "/fertility-test",
  service_stage: "/fertility-stage",
  article: "/article",
  why_choose_us: "/why-choose-us",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_CHATBOT_URL = process.env.NEXT_PUBLIC_API_URL_CHATBOT;
export const BASE_SOCKET_URL = process.env.NEXT_PUBLIC_CHATBOT_SOCKET_URL;

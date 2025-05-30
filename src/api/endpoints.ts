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
    category: string;
    subCategory: string;
    answers: string;
    childCategory: string;
    uploadFile: string;
  };
  management_team: string;
  leader: string;
  service_header: string;
  service_test: string;
  service_stage: string;
  article: string;
  why_choose_us: string;
  international_patients: string;
  calculator_description: string;
  notice: string;
  seo: ISeo;
  breadcrumb: IBreadCrumb;
  terms: string;
  privacy: string;
}
export interface IBreadCrumb {
  about_us: string;
  service: string;
  our_expert: string;
  success_story: string;
  career: string;
  clinic: string;
  clinic_detail: string;
  team: string;
  InternationalPatient: string;
  FertilityCalculator: string;
  OvulationCalculator: string;
}

export interface ISeo {
  about_us: string;
  service: string;
  blog: string;
  contact_us: string;
  home: string;
  success_stories: string;
  our_team: string;
  international_patient: string;
  clinic: string;
  consultation_booking: string;
  request_call: string;
  faqs: string;
  career: string;
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
    category: "chat/category/list/",
    subCategory: "chat/subCategory/list/",
    childCategory: "chat/childCategory/list/",
    answers: "chat/question/list/",
    uploadFile: "chat/upload/file",
  },
  management_team: "/team",
  leader: "/leader",
  service_header: "/service-header",
  service_test: "/fertility-test",
  service_stage: "/fertility-stage",
  article: "/article",
  why_choose_us: "/why-choose-us",
  international_patients: "/international-patient",
  calculator_description: "/calculator-description",
  notice: "/notice/get",
  seo: {
    home: "/seo/static/home",
    about_us: "/seo/static/about-us",
    service: "/seo/static/service",
    blog: "/seo/static/blog",
    contact_us: "/seo/static/contact-us",
    success_stories: "/seo/static/success-stories",
    our_team: "/seo/static/our-team",
    international_patient: "/seo/static/international-patient",
    clinic: "/seo/static/clinic",
    consultation_booking: "/seo/static/consultation-booking",
    request_call: "/seo/static/request-a-call",
    faqs: "/seo/static/faqs",
    career: "/seo/static/career",
  },
  breadcrumb: {
    about_us: "/breadcrumb?filter=about-us",
    service: "/breadcrumb?filter=service",
    our_expert: "/breadcrumb?filter=our-expert",
    success_story: "/breadcrumb?filter=success-story",
    career: "/breadcrumb?filter=carrer",
    clinic: "/breadcrumb?filter=clinic",
    clinic_detail: "/breadcrumb?filter=clinic-detail",
    team: "/breadcrumb?filter=team",
    InternationalPatient: "/breadcrumb?filter=international-patient",
    FertilityCalculator: "/breadcrumb?filter=fertility-calculator",
    OvulationCalculator: "/breadcrumb?filter=ovulation-calculator",
  },

  terms: "/term",
  privacy: "/privacy",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_CHATBOT_URL = process.env.NEXT_PUBLIC_API_URL_CHATBOT;
export const BASE_SOCKET_URL = process.env.NEXT_PUBLIC_CHATBOT_SOCKET_URL;

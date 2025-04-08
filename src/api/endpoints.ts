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
};

export const BASE_API_URL = "http://192.168.1.100:5000/api/v1";

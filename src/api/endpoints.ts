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
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

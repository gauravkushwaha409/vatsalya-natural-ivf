interface Endpoints {
  getData: string;
  contactus: string;
  center: string;
  setting: string;
  request_call: string;
  blog: string;
  faq: string;
  experts: string;
}

export const endpoints: Endpoints = {
  getData: "/getData",
  contactus: "/contact-us",
  center: "/center",
  setting: "/setting",
  request_call: "/request-call",
  blog: "/blog",
  faq: "/faq",
  experts: "/expert",
};

export const BASE_API_URL = "http://192.168.1.100:5000/api/v1";

export interface IClinicDetailsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IClinicDetailsData;
}

export interface IClinicDetailsData {
  object: string;
  id: string;
  name: string;
  slug: string;
  icon: string;
  location: string;
  phone: string;
  listItems: string[];
  mapUrl: string;
  email: string;
  description: string;
  images: string[];
  timings: string[];
  patientStory: IClinicDetailPatientStory[];
  contactUsTitle: string;
  expert: IClinicDetailsExpert[];
  seo: IClinicDetailsSeo2;
  created_date: string;
  updated_date: string;
}

export interface IClinicDetailPatientStory {
  object: "patientStory";
  id: string;
  title: string;
  description: string;
  location: string;
  created_data: string;
  updated_data: string;
}

export interface IClinicDetailsExpert {
  object: string;
  id: string;
  slug: string;
  image: string;
  name: string;
  position: string;
  experience: number;
  education: string;
  description: string;
  center: string;
  service: string[];
  displayPosition: number;
  seo: IClinicDetailsSeo;
  created_date: string;
  updated_date: string;
}

export interface IClinicDetailsSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export interface IClinicDetailsSeo2 {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

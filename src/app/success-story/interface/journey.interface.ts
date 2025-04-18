export interface IJourneyRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IJourneyData;
}

export interface IJourneyData {
  object: string;
  id: string;
  title: string;
  description: string;
  rating: number;
  clientImages: string[];
  clientNumber: number;
  review: string;
  createdAt: string;
  updatedAt: string;
}

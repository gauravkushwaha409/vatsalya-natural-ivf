import { ApiResponse } from "@/interface/api.interface";

export interface ISucessStoriesMetaRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ISucessStoriesMetaData;
}

export interface ISucessStoriesMetaData {
  object: string;
  id: string;
  successStoryMainTitle: string;
  successStoryMainSubtitle: string;
  successStoryExamplesTitle: string;
  successStoryExamplesSubtitle: string;
  SuccessStory: ISucessStoriesMetaSuccessStory;
  created_data: string;
  updated_data: string;
}

export interface ISucessStoriesMetaSuccessStory {
  object: string;
  id: string;
  quoteContent: string;
  storyContent: string;
  videoUrl: string;
  image: string;
  isMain: boolean;
  characterName: string;
  successStoryMetaInfo: string;
  createdAt: string;
  updatedAt: string;
}

export type ISucessStoriesMetaResponse = ApiResponse<ISucessStoriesMetaData>;

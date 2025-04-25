import { FileTypes } from "../file.types";

export interface IChatMessage {
  type: "chat_message" | string;
  sender_id: string;
  sender_name: string;
  room_id: string;
  room_name: string;
  message: string;
  avatar: string;
  file?: string;
  file_type?: FileTypes | null;
  call_type?: string;
  created_at?: string;
  is_bot?: boolean;
  suggestions?: string[];
}

export interface IChatMessageHistoryResponse {
  links: Links;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: Results;
}

export interface Links {
  next: string;
  previous: string;
}

export interface Results {
  data: Data;
}

export interface Data {
  id: string;
  messages: Message[];
}

export interface Message {
  id: string;
  created_at: string;
  updated_at: string;
  message: string;
  file: string;
  file_type: FileTypes;
  call_type?: string;
  is_bot: boolean;
  room: string;
  sender: string;
}

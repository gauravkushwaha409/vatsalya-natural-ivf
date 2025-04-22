export interface IChatMessage {
  type: "chat_message"|string;
  sender_id: string;
  sender_name: string;
  room_id: string;
  room_name: string;
  message: string;
  avatar: string;
  file: string;
  file_type: string;
  call_type: string;
}
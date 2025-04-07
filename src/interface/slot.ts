export interface ISlotResponse {
  status: string;
  statusCode: number;
  message: string;
  data: ISlot[];
}

export interface ISlot {
  id: string;
  startTime: string;
  endTime: string;
  slot: number;
  available: number;
}

export interface IFertilityCareRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IFertilityCareData;
}

export interface IFertilityCareData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  whenToSeeListItemService: IFertilityCareWhenToSeeListItemService[];
  createdAt: string;
  updatedAt: string;
}

export interface IFertilityCareWhenToSeeListItemService {
  object: string;
  id: string;
  icon: string;
  title: string;
  detail: string;
  whenToSeeService: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEventHeaderType {
  id: string;
  title: string;
  subtitle: string;
  events: {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
  }[];
}

import { IserviceRecord } from "@/app/services/interfaces/services.interface";

export interface LayoutProps {
  isInView: boolean;
  OFFER_CARDS: OfferCard[];
}

export interface WhatWeOfferProps {
  data: IserviceRecord[];
  mainWrapperClassName?: string;
}
export interface MobileLayoutProps {
  OFFER_CARDS: OfferCard[];
}

export type CardPosition =
  | "left-top"
  | "left-bottom"
  | "center"
  | "right-top"
  | "right-bottom";
export type CardAlignment = "start" | "center" | "end";

export interface OfferCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  position: CardPosition;
  bgColor: string;
  textColor: string;
  shape: string;
  gradient?: boolean;
  marginTop?: string;
  slug?: string;
}

export interface OfferCardProps {
  card: OfferCard;
  isMobile: boolean;
  align?: CardAlignment;
}

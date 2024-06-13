import { StaticImageData } from "next/image";

export interface IBrandItem {
  _id: string;
  name: string;
  description: string;
  brand_code: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFeatureItem {
  title: string;
  description: string;
  icon: StaticImageData;
  alt: string;
}

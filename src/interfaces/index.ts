import { StaticImageData } from "next/image";

export interface IBrandItem {
  _id: string;
  name: string;
  description: string;
  brand_code: string;
  logo: string;
  create_store: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFeatureItem {
  title: string;
  description: string;
  icon: StaticImageData;
  alt: string;
}

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  category_code: string;
  thumbnail: string;
}

export interface SigninFormState {
  success?: boolean;
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export interface ISignupFormState {
  success?: boolean;
  errors: {
    _form?: string[];
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    password?: string[];
    password1?: string[];
    mobile?: string[];
  };
}

export interface IInventory {
  _id: string;
  size: string;
  stock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMerchandiseItem {
  _id: string;
  name: string;
  description: string;
  features: string[];
  thumbnail: string;
  images: string[];
  category: ICategory;
  brand: IBrandItem;
  base_price: number;
  color: string;
  inventory: IInventory[];
  createdAt: string;
  updatedAt: string;
}

export interface IBrandFilterFormState {
  data: IMerchandiseItem[];
  success: boolean;
  errors: { _form?: string[] };
}

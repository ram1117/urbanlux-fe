import { StaticImageData } from "next/image";

export interface IBrandItem {
  _id: string;
  name: string;
  description: string;
  brand_code: string;
  logo: string;
  create_store: boolean;
  createdAt: string;
  updatedAt: string;
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
  createdAt: string;
  updatedAt: string;
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

export interface ICategoryFilterFormState {
  data: IMerchandiseItem[];
  success: boolean;
  errors: { _form?: string[] };
}

export interface IAddCartFormState {
  errors: {
    inventory?: string[];
    quantity?: string[];
    _form?: string[];
  };
}

export interface ICartItem {
  name: string;
  inventory: string;
  quantity: string;
  merchandise: string;
  image: string;
  price: number;
  size: string;
}

export interface IPlaceOrderItem {
  inventory: string;
  quantity: number;
  merchandise: string;
}

export interface IFormAddressItem {
  billing: string;
  delivery: string;
}

export interface IAddressItem {
  _id: string;
  fullname: string;
  label: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  user: string;
}

export interface IAddressItems {
  delivery: IAddressItem[];
  billing: IAddressItem[];
}

export interface IAddAddressFormState {
  success: boolean;
  errors: {
    label?: string[];
    address_type?: string[];
    line1?: string[];
    line2?: string[];
    city?: string[];
    state?: string[];
    postal_code?: string[];
    country?: string[];
    _form?: string[];
  };
}

export interface IOrderItem {
  _id: string;
  merchandise: string;
  merchandise_name: string;
  merchandise_thumbnail: string;
  quantity: number;
  size: string;
  subtotal: number;
  user: string;
  available: boolean;
  inventory: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  _id: string;
  items: IOrderItem[];
  total: number;
  address: IAddressItem;
  payment_status: string;
  order_status: string;
  tracking_id: string;
  comments: string[];
  createdAt: string;
  updatedAt: string;
  cancelled: boolean;
}

export interface IPaymentSummary {
  secret: string;
  order: IOrder;
}

export interface ICancelOrderFormState {
  success: boolean;
  message?: string;
  errors: {
    _form?: string[];
    orderitems?: string[];
  };
}

export interface IUserInfo {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  mobile: string;
  createdAt: string;
  updatedAt: string;
}

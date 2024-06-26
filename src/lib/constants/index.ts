export const CART_KEY = "cartitems";
export const CART_LIMIT = 6;

export enum SORT_VALUES {
  ALPHASC = "alphasc",
  ALPHDSC = "alphdsc",
  PRICEASC = "priceasc",
  PRICEDSC = "pricedsc",
  DATEDSC = "datadsc",
}

export enum CHARGES {
  SHIPPING = 10,
  TAX = 0.08,
}

export enum ADDRESS_TYPE {
  DELIVERY = "delivery",
  BILLING = "billing",
}

export enum PAYMENT_STATUS {
  PENDING = "pending",
  CONFIRMATION = "waiting confirmation",
  COMPLETE = "complete",
}

export enum ORDER_STATUS {
  PLACED = "placed",
  FULFILLED = "fulfilled",
  CANCELLED = "cancelled",
  NOTFULFILLED = "not fulfilled",
}

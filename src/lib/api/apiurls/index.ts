const MERCHANDISE_BASE_URL = process.env.API_MERCHANDISE;
const MERCHANDISE_BASE_URL_CLIENT = process.env.NEXT_PUBLIC_API_MERCHANDISE;
const AUTH_BASE_URL = process.env.API_AUTH;
const ORDERING_BASE_URL = process.env.API_ORDERING;
const ORDERING_BASE_URL_CLIENT = process.env.NEXT_PUBLIC_API_ORDERING;

export const getBrandsCategories = () =>
  `${MERCHANDISE_BASE_URL_CLIENT}/brandscategories`;
export const getCategories = () => `${MERCHANDISE_BASE_URL}/category`;
export const getTopBrands = () => `${MERCHANDISE_BASE_URL}/topbrands`;
export const getAllBrands = () => `${MERCHANDISE_BASE_URL}/brands`;
export const postCreateUser = () => `${AUTH_BASE_URL}/auth/signup`;
export const getLatest = () => `${MERCHANDISE_BASE_URL}/latest`;
export const getFilteredItems = () => `${MERCHANDISE_BASE_URL}/filteritems`;
export const getInventoryValues = () => `${MERCHANDISE_BASE_URL}/inventory`;

export const getCategoriesClient = () =>
  `${MERCHANDISE_BASE_URL_CLIENT}/category`;
export const getBrandsClient = () => `${MERCHANDISE_BASE_URL_CLIENT}/brands`;
export const getBrandItemsClient = (id: string) =>
  `${MERCHANDISE_BASE_URL_CLIENT}?brandid=${id}`;
export const getCategoryItemsClient = (id: string) =>
  `${MERCHANDISE_BASE_URL_CLIENT}?categoryid=${id}`;
export const getItemClient = (id: string) =>
  `${MERCHANDISE_BASE_URL_CLIENT}/item/${id}`;

export const getAddresses = () => `${ORDERING_BASE_URL_CLIENT}/address`;
export const addAddress = () => `${ORDERING_BASE_URL_CLIENT}/address`;

export const placeOrder = () => `${ORDERING_BASE_URL}/order`;
export const getPaymentSecret = (orderid: string) =>
  `${ORDERING_BASE_URL}/order/payment/${orderid}`;
export const updatePaymentStatus = (intent_id: string) =>
  `${ORDERING_BASE_URL}/order/payment/${intent_id}`;
export const getOrders = () => `${ORDERING_BASE_URL}/order`;
export const getOrderById = (id: string) => `${ORDERING_BASE_URL}/order/${id}`;
export const cancelOrder = (id: string) =>
  `${ORDERING_BASE_URL}/order/cancel/${id}`;

export const getUserProfile = () => `${AUTH_BASE_URL}/user`;

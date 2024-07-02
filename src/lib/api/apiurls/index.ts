const MERCHANDISE_BASE_URL = process.env.NEXT_PUBLIC_API_MERCHANDISE;
const AUTH_BASE_URL = process.env.NEXT_PUBLIC_API_AUTH;
const ORDERING_BASE_URL = process.env.NEXT_PUBLIC_API_ORDERING;

/* URLs related to Merchandise */

export const getBrandsCategories = () =>
  `${MERCHANDISE_BASE_URL}/brandscategories`;
export const getCategories = () => `${MERCHANDISE_BASE_URL}/category`;
export const getCategory = (id: string) =>
  `${MERCHANDISE_BASE_URL}/category/${id}`;
export const getTopBrands = () => `${MERCHANDISE_BASE_URL}/topbrands`;
export const getAllBrands = () => `${MERCHANDISE_BASE_URL}/brands`;
export const getBrand = (id: string) => `${MERCHANDISE_BASE_URL}/brands/${id}`;
export const getLatest = () => `${MERCHANDISE_BASE_URL}/latest`;
export const getFilteredItems = () => `${MERCHANDISE_BASE_URL}/filteritems`;
export const getInventoryValues = () => `${MERCHANDISE_BASE_URL}/inventory`;
export const getBrandItems = (id: string) =>
  `${MERCHANDISE_BASE_URL}?brandid=${id}`;
export const getCategoryItems = (id: string) =>
  `${MERCHANDISE_BASE_URL}?categoryid=${id}`;
export const getItem = (id: string) => `${MERCHANDISE_BASE_URL}/item/${id}`;

/* URLs related to Authentication */

export const postCreateUser = () => `${AUTH_BASE_URL}/auth/signup`;
export const getAddresses = () => `${ORDERING_BASE_URL}/address`;
export const addAddress = () => `${ORDERING_BASE_URL}/address`;
export const getUserProfile = () => `${AUTH_BASE_URL}/user`;

/* URLs related to Ordering and payments */

export const placeOrder = () => `${ORDERING_BASE_URL}/order`;
export const getPaymentSecret = (orderid: string) =>
  `${ORDERING_BASE_URL}/order/payment/${orderid}`;
export const updatePaymentStatus = (intent_id: string) =>
  `${ORDERING_BASE_URL}/order/payment/${intent_id}`;
export const getOrders = () => `${ORDERING_BASE_URL}/order`;
export const getOrderById = (id: string) => `${ORDERING_BASE_URL}/order/${id}`;
export const cancelOrder = (id: string) =>
  `${ORDERING_BASE_URL}/order/cancel/${id}`;

const MERCHANDISE_BASE_URL = process.env.API_MERCHANDISE;
const AUTH_BASE_URL = process.env.API_AUTH;
// const ORDERING_BASE_URL = process.env.API_ORDERING;

export const getCategories = () => `${MERCHANDISE_BASE_URL}/category`;
export const getTopBrands = () => `${MERCHANDISE_BASE_URL}/brandstore`;
export const getAllBrands = () => `${MERCHANDISE_BASE_URL}/brand`;
export const getBrandItems = (brandcode: string) =>
  `${MERCHANDISE_BASE_URL}?brandcode=${brandcode}`;
export const postCreateUser = () => `${AUTH_BASE_URL}/auth/signup`;

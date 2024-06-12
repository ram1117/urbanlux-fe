const MERCHANDISE_BASE_URL = process.env.API_MERCHANDISE;
// const AUTH_BASE_URL = process.env.API_AUTH;
// const ORDERING_BASE_URL = process.env.API_ORDERING;

export const getCategories = () => `${MERCHANDISE_BASE_URL}/category`;
export const getBrands = () => `${MERCHANDISE_BASE_URL}/brand`;

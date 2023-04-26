const localhost = "http://127.0.0.1:8000";

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;

// export const fetchCart = `${endpoint}/fetch-cart/`;
export const productListURL = `${endpoint}/products/`;
export const productDetailURL = (id) => `${endpoint}/products/${id}/`;
export const addToCartURL = `${endpoint}/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/order-summary/`;
export const addCouponURL = `${endpoint}/add-coupon/`;
export const countryListURL = `${endpoint}/countries/`;
export const addressListURL = addressType => `${endpoint}/addresses/?address_type=${addressType}`;
export const sellingNew = SKU => `${endpoint}/selling/new/?style_codes=${SKU}`;
export const addressCreateURL = `${endpoint}/addresses/create/`;
export const addToStockURL = `${endpoint}/add-to-stock/`;

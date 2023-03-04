import axiosClient from "./axiosClient";
class ProductApi {
  getProduct = (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  };
  getProductThumbnails = (params) => {
    const url = "/product-thumbnails";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;

import axios from "axios";

export const getAllProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProductsByCategory = (category, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      callback(response);
    })
    .catch((error) => console.log(error));
};

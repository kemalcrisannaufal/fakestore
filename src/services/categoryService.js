import axios from "axios";

export const getAllCategories = (callback) => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => {
      callback(response);
    })
    .catch((err) => console.log(err));
};

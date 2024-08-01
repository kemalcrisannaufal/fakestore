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

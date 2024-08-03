import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import ProductDetail from "./modules/productDetail";
import ProductsPage from "./pages/ProductsPage";
import ProductCategory from "./modules/productCategory";
import Cart from "./modules/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  {
    path: "/products/category/:name",
    element: <ProductCategory />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../../services/productService";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-10 lg:px-36">
        <h1 className="text-2xl text-neutral-700 font-medium">Our Products</h1>

        <div className="my-5 grid grid-cols-3 gap-2">
          {products.slice(0, 9).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;

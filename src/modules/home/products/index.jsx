import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../../services/productService";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-10 px-5 lg:px-36">
        <h1 className="text-2xl text-neutral-700 font-medium">Our Products</h1>

        <div className="my-5 grid grid-cols-3 gap-2 lg:gap-5">
          {loading
            ? Array(9)
                .fill()
                .map((_, index) => <ProductCard key={index} isLoading={true} />)
            : products
                .slice(0, 9)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    isLoading={false}
                  />
                ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;

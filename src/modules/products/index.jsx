import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import CardProduct from "./CardProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full px-10 lg:px-36">
      <h1 className="text-xl md:text-3xl font-bold text-neutral-800 capitalize">
        All Products
      </h1>

      <div className="w-full flex flex-wrap justify-center gap-2 lg:gap-5 mt-5">
        {loading
          ? Array(10)
              .fill()
              .map((_, index) => <CardProduct key={index} loading={true} />)
          : products.map((item, index) => (
              <CardProduct
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
      </div>
    </div>
  );
};

export default Products;

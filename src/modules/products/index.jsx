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
    <div className="w-full flex flex-wrap justify-center gap-5 lg:px-20">
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
  );
};

export default Products;

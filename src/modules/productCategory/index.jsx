import { useParams } from "react-router-dom";
import MainLayout from "../../common/layout/MainLayout";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../services/productService";
import CardProduct from "../products/CardProduct";

const ProductCategory = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(name, (response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, [name]);

  return (
    <MainLayout>
      <div className="w-full px-10 lg:px-36">
        <h1 className="text-xl md:text-3xl font-bold capitalize text-neutral-800">
          {name}
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {loading
            ? Array(4)
                .fill()
                .map((_, index) => <CardProduct key={index} loading={true} />)
            : products.map((item) => (
                <CardProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  loading={false}
                />
              ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductCategory;

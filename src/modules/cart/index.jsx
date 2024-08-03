import MainLayout from "../../common/layout/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCartCard from "./ProductCartCard";

const getSingleProduct = (id) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const Cart = () => {
  const idProduct = [1, 2, 3, 4];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = idProduct.map((id) => getSingleProduct(id));
      const productResponses = await Promise.all(productPromises);
      setProducts(productResponses);
      setLoading(false);
    };

    fetchProducts();
  }, [idProduct]);

  return (
    <MainLayout>
      <div className="px-5 lg:px-36">
        {loading ? (
          <ProductCartCard loading={true} />
        ) : (
          <div className="w-full flex flex-wrap gap-2 xl:grid xl:grid-cols-2 xl:gap-5">
            {products.map((product) => (
              <ProductCartCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                qty={product.id}
                loading={false}
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;

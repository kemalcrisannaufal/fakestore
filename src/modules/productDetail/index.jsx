import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/productService";
import MainLayout from "../../common/layout/MainLayout";
import Button from "../../common/components/elements/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  useEffect(() => {
    getDetailProduct(id, (response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, [id]);

  return (
    <div>
      <MainLayout>
        <div className="w-full flex lg:px-36">
          <div className="w-1/3 p-2 h-80 flex justify-center items-center">
            <div className="w-full flex justify-center h-80 w-80 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full min-h-80 flex flex-col justify-center py-10 ml-10">
            <div>
              <div className="flex justify-between items-start">
                <div className="mr-20">
                  <h1 className="text-neutral-600 font-bold text-3xl">
                    {product.title}
                  </h1>
                  <p className="mt-2 text-neutral-500 font-medium">
                    Review ({product.rating.rate}) from {product.rating.count}{" "}
                    users
                  </p>
                </div>
                <p className="text-4xl font-bold text-neutral-600">
                  ${product.price}
                </p>
              </div>
              <p className="mt-5 text-neutral-500">{product.description}</p>
            </div>

            <div className="mt-5 w-full flex justify-end items-center">
              <Button label={"Add To Cart"} onClick={() => {}} />
            </div>
          </div>
        </div>
        <hr className="my-5 w-full" />
      </MainLayout>
    </div>
  );
};

export default ProductDetail;

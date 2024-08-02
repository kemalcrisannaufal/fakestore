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
        <div className="w-full lg:flex lg:px-36">
          <div className="px-10 lg:w-1/3 lg:p-2 h-64 lg:h-80 flex justify-center items-center overflow-hidden">
            <div className="w-full flex justify-center h-80 w-80 lg:border-none overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain scale-75"
              />
            </div>
          </div>

          <div className="w-full min-h-80 flex flex-col justify-center p-10 lg:ml-10">
            <div>
              <div className="md:flex justify-between items-start">
                <div className="md:mr-20">
                  <h1 className="text-neutral-600 font-bold text-xl md:text-3xl">
                    {product.title}
                  </h1>
                  <p className="mt-2 text-neutral-500 font-medium">
                    Review ({product.rating.rate}) from {product.rating.count}{" "}
                    users
                  </p>
                </div>
                <p className="text-4xl font-bold text-neutral-600 hidden md:block">
                  ${product.price}
                </p>
              </div>  
              <p className="mt-5 text-sm text-justify sm:text-md lg:text-lg text-neutral-500">
                {product.description}
              </p>
            </div>

            <div className="mt-5 w-full flex justify-between md:justify-end items-center">
              <p className="text-4xl font-bold text-neutral-600 md:hidden">
                ${product.price}
              </p>
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

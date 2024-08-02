import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/productService";
import MainLayout from "../../common/layout/MainLayout";
import Button from "../../common/components/elements/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailProduct(id, (response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      <MainLayout>
        <div className="w-full lg:flex lg:px-36">
          <div className="px-10 lg:w-1/3 lg:p-2 h-64 lg:h-80 flex justify-center items-center overflow-hidden">
            <div className="w-full flex justify-center h-80 w-80 lg:border-none overflow-hidden">
              {loading ? (
                <Skeleton height={320} width={320} />
              ) : (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain scale-75"
                />
              )}
            </div>
          </div>

          <div className="w-full min-h-80 flex flex-col justify-center p-10 lg:ml-10">
            <div>
              <div className="md:flex justify-between items-start">
                <div className="md:mr-20">
                  <h1 className="text-neutral-600 font-bold text-xl md:text-3xl">
                    {loading ? <Skeleton width={300} /> : product.title}
                  </h1>
                  <p className="mt-2 text-neutral-500 font-medium">
                    {loading ? (
                      <Skeleton width={200} />
                    ) : (
                      `Review (${product.rating.rate}) from ${product.rating.count} users`
                    )}
                  </p>
                </div>
                <p className="text-4xl font-bold text-neutral-600 hidden md:block">
                  {loading ? <Skeleton width={100} /> : `$${product.price}`}
                </p>
              </div>
              <p className="mt-5 text-sm text-justify sm:text-md lg:text-lg text-neutral-500">
                {loading ? <Skeleton count={3} /> : product.description}
              </p>
            </div>

            <div className="mt-5 w-full flex justify-between md:justify-end items-center">
              <p className="text-4xl font-bold text-neutral-600 md:hidden">
                {loading ? <Skeleton width={100} /> : `$${product.price}`}
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

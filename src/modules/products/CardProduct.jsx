import PropTypes from "prop-types";
import Button from "../../common/components/elements/Button";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardProduct = (props) => {
  const {
    image,
    title,
    price,
    id,
    rating = { rate: 0, count: 0 },
    loading,
  } = props;
  return (
    <div className="w-36 h-72 lg:w-64 rounded-lg shadow-lg border-2 border-neutral-300 flex flex-col pb-3 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="w-full h-full lg:w-64 lg:h-56 p-5 flex justify-center items-center border-b-2 overflow-hidden">
        <Link to={`/products/${id}`}>
          {loading ? (
            <Skeleton />
          ) : (
            <img
              src={image}
              alt={title}
              className="object-cover scale-50"
              loading="lazy"
            />
          )}
        </Link>
      </div>
      <div className="w-full py-2 px-3 flex-grow flex flex-col">
        <div className="flex-grow">
          {loading ? (
            <Skeleton count={2} />
          ) : (
            <p className="text-sm sm:text-md md:text-xl font-semibold text-neutral-600 text-justify line-clamp-2">
              {title}
            </p>
          )}
          <div className="w-full flex items-center gap-2 text-md font-medium text-neutral-500 mt-2">
            <div className="flex items-center gap-1">
              {loading ? (
                <Skeleton count={1} />
              ) : (
                <p className="text-xs sm:text-sm md:text-md"> {rating.rate}</p>
              )}

              <FaStar className="text-orange-500" />
            </div>
            <div>
              {loading ? (
                <Skeleton count={1} />
              ) : (
                <p className="text-xs sm:text-sm   md:text-md">
                  | {rating.count} reviews
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:flex  justify-between items-center mt-4">
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <p className="text-md text-center md:text-start md:text-xl font-bold text-neutral-700">
              ${price}
            </p>
          )}

          <Button
            label={"Add to Cart"}
            classname={"w-full flex justify-center mt-2"}
            icon={<FaCartShopping className="hidden md:block" />}
            onClick={() => {
              window.href.location = "/";
            }}
          />
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
  loading: PropTypes.bool,
};

export default CardProduct;

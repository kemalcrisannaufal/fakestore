import PropTypes from "prop-types";
import Button from "../../common/components/elements/Button";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCartCard = (props) => {
  const { id, image, title, description, price, qty, loading } = props;

  const [quantity, setQuantity] = useState(qty);

  const handleQtyButtonClick = (type) => {
    if (type === "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className="w-full md:h-46 flex items-center rounded-md border border-neutral-400 shadow-md overflow-hidden select-none">
      <div className="w-full h-full flex">
        <Link to={`/products/${id}`}>
          <div className="w-24 md:w-36 h-full overflow-hidden flex flex-shrink-0 justify-center items-center group">
            {loading ? (
              <Skeleton width="100%" height="100%" />
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain scale-50 group-hover:scale-75 transition-all duration-300"
              />
            )}
          </div>
        </Link>
        <div className="w-full p-3 flex flex-col justify-between h-full">
          <div className="flex-grow flex flex-col justify-between">
            <div>
              {loading ? (
                <Skeleton
                  height={24}
                  count={2}
                  style={{ marginBottom: "4px" }}
                />
              ) : (
                <h1 className="text-md md:text-xl font-bold text-neutral-700 line-clamp-2">
                  {title}
                </h1>
              )}
              {loading ? (
                <Skeleton height={16} />
              ) : (
                <p className="text-xs md:text-sm line-clamp-1 md:line-clamp-2 xl:line-clamp-1 text-neutral-500">
                  {description}
                </p>
              )}
            </div>
            {loading ? (
              <Skeleton height={32} />
            ) : (
              <p className="mt-2 text-xl md:text-2xl font-bold text-neutral-600">
                $ {quantity * price}
              </p>
            )}
          </div>

          <div className="mt-2 w-full flex justify-between items-center">
            {loading ? (
              <Skeleton width={150} height={40} />
            ) : (
              <div className="flex items-center rounded-md border border-neutral-400">
                <button
                  className={`py-1 px-2 md:px-3 bg-neutral-600 rounded-l text-white font-medium flex items-center justify-center hover:opacity-75 ${
                    quantity === 1 && "opacity-50 pointer-events-none"
                  }`}
                  onClick={() => handleQtyButtonClick("-")}
                >
                  <p className="text-lg md:text-xl">-</p>
                </button>
                <div className="py-1 px-2 md:px-3">
                  <p>{quantity}</p>
                </div>
                <button
                  className="py-1 px-2 md:px-3 bg-neutral-600 rounded-r text-white font-medium flex items-center justify-center hover:opacity-75"
                  onClick={() => handleQtyButtonClick("+")}
                >
                  <p className="text-lg md:text-xl">+</p>
                </button>
              </div>
            )}

            {loading ? (
              <Skeleton width={100} height={40} />
            ) : (
              <div className="flex items-center gap-2">
                <button className="border p-2 md:p-3 rounded-md bg-neutral-700 pointer-events-none select-none opacity-50">
                  <FaTrash className="text-white text-lg md:text-xl" />
                </button>
                <Button
                  label={"Checkout"}
                  onClick={() => {}}
                  classname={"pointer-events-none select-none opacity-50"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCartCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  qty: PropTypes.number,
  price: PropTypes.number,
  loading: PropTypes.bool,
};

export default ProductCartCard;

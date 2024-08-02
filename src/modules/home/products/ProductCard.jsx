import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = (props) => {
  const { id, image, title, isLoading } = props;
  return (
    <Link to={`/products/${id}`}>
      <div className="w-28 h-28 sm:w-48 sm:h-48 lg:w-72 lg:h-56 border border-slate-300 p-2 bg-white rounded-lg shadowselect-none relative group hover:scale-110 transition-all duration-300">
        {isLoading ? (
          <Skeleton height={"100%"} />
        ) : (
          <img
            src={image}
            alt={title}
            draggable={false}
            className="w-full h-full object-contain"
          />
        )}

        <div>
          <div className="absolute left-0 bottom-0 bg-transparent z-50 w-full h-10 md:h-16 p-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-full flex items-center">
              <p className="font-bold text-white text-xs sm:text-sm md:text-md lg:text-lg line-clamp-2">
                {title}
              </p>
            </div>
          </div>
          <div className="absolute w-full h-10 md:h-16 left-0 bottom-0 z-10 bg-neutral-500 opacity-30 md:opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ProductCard;

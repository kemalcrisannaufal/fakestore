import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, image, title } = props;
  return (
    <Link to={`/products/${id}`}>
      <div className="lg:w-64 lg:h-48 border bg-white select-none relative group">
        <img
          src={image}
          alt={title}
          draggable={false}
          className="w-full h-full object-contain"
        />
        <div>
          <div className="absolute left-0 bottom-0 bg-transparent z-50 w-full h-16 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-full flex items-center">
              <p className="font-bold text-white line-clamp-2">{title}</p>
            </div>
          </div>
          <div className="absolute w-full h-16 left-0 bottom-0 z-10 bg-neutral-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;

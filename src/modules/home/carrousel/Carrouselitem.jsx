import PropTypes from "prop-types";

const CarrouselItem = (props) => {
  const { image } = props;
  return (
    <div className="rounded-lg shadow w-full h-full">
      <img src={image} alt={"carrousel-image"} />
    </div>
  );
};
CarrouselItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CarrouselItem;

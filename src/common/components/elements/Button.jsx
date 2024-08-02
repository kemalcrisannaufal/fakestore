import PropTypes from "prop-types";

const Button = (props) => {
  const { type, label, onClick, classname } = props;
  return (
    <button
      type={type}
      className={`block border py-2 px-3 bg-neutral-700 text-white rounded-lg ${classname}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classname: PropTypes.string,
};

export default Button;

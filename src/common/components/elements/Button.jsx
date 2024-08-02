import PropTypes from "prop-types";

const Button = (props) => {
  const { type, label, onClick, classname, icon } = props;
  return (
    <button
      type={type}
      className={`block border py-2 px-3 bg-neutral-700 text-white rounded-lg hover:opacity-90 ${classname}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <p className="text-sm md:text-lg">{label}</p>
        {icon}
      </div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classname: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;

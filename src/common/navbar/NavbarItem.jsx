import PropTypes from "prop-types";

const NavbarItem = (props) => {
  const { onClick, icon, label, classname } = props;
  return (
    <button onClick={onClick}>
      <div
        className={`flex items-center gap-3 p-1 hover:underline active:border-dashed active:border-neutral-700 select-none ${classname}`}
      >
        {icon}
        <p className="text-xs sm:text-sm lg:text-md font-medium text-neutral-700">
          {label}
        </p>
      </div>
    </button>
  );
};

NavbarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default NavbarItem;

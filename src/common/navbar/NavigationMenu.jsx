import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationMenu = (props) => {
  const { linkTo, label } = props;
  return (
    <Link to={linkTo}>
      <div className="p-1 hover:underline">
        <p className="text-black capitalize">{label}</p>
      </div>
    </Link>
  );
};

NavigationMenu.propTypes = {
  linkTo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationMenu;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = (props) => {
  const { classname } = props;
  return (
    <Link to={"/"}>
      <div className={`w-full flex justify-center items-center py-4`}>
        <h1 className={`text-2xl text-center lg:text-5xl text-neutral-600 font-bold ml-4 font-poppins tracking-wide${classname}`}>
          KCR FAKESTORE
        </h1>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  classname: PropTypes.string,
};

export default Logo;

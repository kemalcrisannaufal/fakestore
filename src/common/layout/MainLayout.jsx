import NavBar from "../navbar";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="w-full">
      <NavBar />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

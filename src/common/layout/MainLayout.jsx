import NavBar from "../navbar";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

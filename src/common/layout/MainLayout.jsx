import NavBar from "../navbar";
import PropTypes from "prop-types";
import Footer from "../footer";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen flex flex-col items-between">
      <NavBar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

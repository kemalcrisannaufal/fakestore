import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="w-full flex justify-center items-center py-4 bg-white">
        <h1 className="text-2xl text-center lg:text-5xl text-neutral-600 font-bold ml-4 font-poppins tracking-wide">
          KCR FAKESTORE
        </h1>
      </div>
    </Link>
  );
};

export default Logo;

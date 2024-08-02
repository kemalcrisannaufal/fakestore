import categories from "../constant/categories";
import NavigationMenu from "./NavigationMenu";
import { FaUser, FaShoppingCart, FaSearch, FaGlobe } from "react-icons/fa";

import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-max py-5 lg:px-20">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <NavbarItem
              icon={<FaGlobe />}
              label={"Language"}
              onClick={() => {}}
            />
            <NavbarItem label={"Contact"} onClick={() => {}} />
          </div>
          <div className="flex gap-3">
            <NavbarItem
              icon={<FaUser />}
              label={"Sign In"}
              onClick={() => {}}
            />
            <NavbarItem
              icon={<FaShoppingCart />}
              label={"Cart"}
              onClick={() => {}}
            />
            <NavbarItem
              icon={<FaSearch />}
              label={"Search"}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-4 bg-white">
          <h1 className="text-5xl text-neutral-600 font-bold ml-4 font-poppins tracking-wide">
            KCR FAKESTORE
          </h1>
        </div>

        <hr />

        <div className="w-full flex justify-center items-center">
          <ul className="flex gap-10">
            {categories.map((item) => (
              <li key={item.id}>
                <NavigationMenu linkTo={item.path} label={item.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

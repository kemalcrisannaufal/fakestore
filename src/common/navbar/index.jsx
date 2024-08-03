import categories from "../constant/categories";
import NavigationMenu from "./NavigationMenu";
import { FaUser, FaShoppingCart, FaSearch, FaGlobe } from "react-icons/fa";
import Logo from "../components/elements/Logo";
import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="w-full  h-max py-5 px-5 lg:px-20">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <NavbarItem
              icon={<FaGlobe />}
              label={"Language"}
              onClick={() => {}}
              classname={"hidden md:flex"}
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
              onClick={() => {
                navigation("/cart");
              }}
            />
            <NavbarItem
              icon={<FaSearch />}
              label={"Search"}
              onClick={() => {}}
              classname={"hidden md:flex"}
            />
          </div>
        </div>

        <Logo />
        <hr className="border-1 border-neutral-400" />

        <div className="w-full flex justify-center items-center">
          <ul className="flex gap-2 lg:gap-10">
            {categories.map((item) => (
              <li key={item.id}>
                <NavigationMenu
                  linkTo={`/products/category/${item.name}`}
                  label={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

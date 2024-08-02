import ProductSection from "./products";
import HomeCarrousel from "./carrousel";
import MainLayout from "../../common/layout/MainLayout";
import Button from "../../common/components/elements/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <HomeCarrousel />
      <ProductSection />
      <div className="w-full flex justify-center">
        <Button
          label={"More"}
          classname={"px-10"}
          onClick={() => {
            navigate("/products");
          }}
        />
      </div>
    </MainLayout>
  );
};

export default Home;

import ProductSection from "./products";
import HomeCarrousel from "./carrousel";
import MainLayout from "../../common/layout/MainLayout";
import Button from "../../common/components/elements/Button";

const Home = () => {
  return (
    <MainLayout>
      <HomeCarrousel />
      <ProductSection />
      <div className="w-full flex justify-center">
        <Button label={"More"} classname={"px-10"} onClick={() => {}} />
      </div>
    </MainLayout>
  );
};

export default Home;

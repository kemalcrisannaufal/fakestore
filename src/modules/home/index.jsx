import ProductSection from "./products";
import HomeCarrousel from "./carrousel";
import MainLayout from "../../common/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HomeCarrousel />
      <ProductSection />
    </MainLayout>
  );
};

export default Home;

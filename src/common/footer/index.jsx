import Logo from "../components/elements/Logo";

const Footer = () => {
  return (
    <footer className="w-full py-2 pb-0 mt-5 md:mt-10 bg-neutral-700 text-center text-white">
      <hr className="border-t-2 border-white my-1" />
      <div className="w-full flex justify-between items-center px-5">
        <Logo classname={"bg-transparent text-white text-[20px] lg:text-lg"} />
        <p className="text-sm sm:text-md lg:text-base">© Kemal Crisannaufal 2024</p>
      </div>
    </footer>
  );
};

export default Footer;


import AboutUs from "./AboutUs";
import FeaturesFooter from "./FeaturesFooter";
import FooterLogo from "./FooterLogo";
import LatestBlogs from "./LatestBlogs";



const Footer = () => {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <FooterLogo />
          <AboutUs />
          <FeaturesFooter />
          <LatestBlogs />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

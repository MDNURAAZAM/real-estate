import React from 'react';
import SocialMedia from './SocialMedia';
import logo from "../../assets/images/logo/logo.svg";

const FooterLogo = () => {
    return (
        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a
                // //href="javascript:void(0)"
                className="mb-6 inline-block  max-h-[100px]"
              >
                <img src={logo} alt="logo" className="max-w-full" />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <SocialMedia />
            </div>
          </div>
    );
};

export default FooterLogo;
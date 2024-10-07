import React from "react";
import FacebookSVG from "../SVGs/Team/FacebookSVG";
import TwitterSVG from "../SVGs/Team/TwitterSVG";
import InstagramSVG from "../SVGs/Team/InstagramSVG";
import LinkedinSVG from "../SVGs/Team/LinkedinSVG";

const SocialMedia = () => {
  return (
    <div className="-mx-3 flex items-center">
      <a
        //   //href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <FacebookSVG />
      </a>
      <a
        //   //href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <TwitterSVG />
      </a>
      <a
        //   //href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <InstagramSVG />
      </a>
      <a
        //   //href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <LinkedinSVG />
      </a>
    </div>
  );
};

export default SocialMedia;

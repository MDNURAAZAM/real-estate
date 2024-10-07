import FeaturesExpertSVG from "./components/SVGs/Features/FeaturesExpertSVG";
import FeaturesPersonalizedSVG from "./components/SVGs/Features/FeaturesPersonalizedSVG";
import FeaturesPremiumSVG from "./components/SVGs/Features/FeaturesPremiumSVG";
import FeaturesVirtualSVG from "./components/SVGs/Features/FeaturesVirtualSVG";

export const features = [
  {
    title: "Premium Property Listings",
    description:
      "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
    svg: <FeaturesPremiumSVG />,
  },
  {
    title: "Personalized Property Matching",
    description:
      "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
    svg: <FeaturesPersonalizedSVG />,
  },
  {
    title: "Expert Guidance and Support",
    description:
      "Benefit from the expertise of our dedicated team of real estate professionals.",
    svg: <FeaturesExpertSVG />,
  },
  {
    title: "Virtual Tours",
    description:
      "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
    svg: <FeaturesVirtualSVG />,
  },
];

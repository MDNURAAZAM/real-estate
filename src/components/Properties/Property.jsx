import React from "react";
import BedSVG from "../SVGs/Properties/BedSVG";
import BathSVG from "../SVGs/Properties/BathSVG";

const Property = ({ property }) => {
  const { name, price, numberOfBedroom, numberOfBathroom, image } =
    property || {};
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt="property" />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedSVG />
          <p>
            <span className="font-bold text-gray-900">{numberOfBedroom}</span>{" "}
            {`Bedroom${numberOfBedroom > 1 ? "s" : ""}`}
          </p>
        </div>
        <div className="flex items-center">
          <BathSVG />
          <p>
            <span className="font-bold text-gray-900">{numberOfBathroom}</span>{" "}
            {`Bathroom${numberOfBathroom > 1 ? "s" : ""}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;

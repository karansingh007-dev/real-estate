import React from "react";

const CommunityCard = ({ title, tagline, details, image }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden transition-transform duration-300 hover:scale-110">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <span className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 text-xs font-semibold">
          FEATURED
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold uppercase text-sm">{title}</h3>
        <p className="text-gray-600 text-xs">{tagline}</p>
        <p className="text-xs text-gray-500 mt-1">{details}</p>
      </div>
    </div>
  );
};

export default CommunityCard;

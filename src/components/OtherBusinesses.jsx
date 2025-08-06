import React from "react";

const businesses = [
  { name: "Emaar Hospitality", img: "https://i.imgur.com/CbmIsFJ.jpeg" },
  { name: "Emaar Malls", img: "https://i.imgur.com/wS4hWFn.jpeg" },
  { name: "Burj Khalifa", img: "https://i.imgur.com/zDE2pOm.jpeg" },
  { name: "Emaar Entertainment", img: "https://i.imgur.com/HGSl3yL.jpeg" },
];

const OtherBusinesses = () => {
  return (
    <section className="bg-gray-100 px-8 py-12">
      <h2 className="text-2xl font-semibold mb-8">OTHER EMAAR BUSINESSES</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {businesses.map((biz, i) => (
          <div key={i}>
            <img
              src={biz.img}
              alt={biz.name}
              className="rounded-lg h-48 w-full object-cover"
            />
            <p className="text-center mt-2 font-medium">{biz.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherBusinesses;

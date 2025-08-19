import React from "react";

const AboutHero = () => {
  return (
    <section className="px-8 py-12 bg-white text-center">
      <h1 className="text-3xl font-semibold mb-6">
        ABOUT GURGAON REALTY GROUP
      </h1>
      <p className="max-w-5xl mx-auto text-gray-700">
        With a growing portfolio across Delhi NCR, Gurgaon Realty Group is one
        of the region’s most trusted real estate development and advisory firms.
        Known for transforming urban landscapes with iconic residential,
        commercial, and mixed-use projects, we focus on quality, innovation, and
        timely delivery. From luxury high-rises to affordable housing, our
        mission is to elevate the way India lives and works.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-6">
        {/* <img
          src="data:image/jpeg;base64,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"
          alt="Founder"
          className="w-80 rounded-lg shadow-lg"
        /> */}
        <div className="text-left max-w-6xl">
          <p className="italic text-xl mb-4">
            “Our vision is to build sustainable communities that inspire
            lifestyles and empower futures in Delhi NCR and beyond.”
          </p>
          <p className="font-semibold ">Founder: Rohan Malhotra</p>
          <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded">
            Read Founder's Letter
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

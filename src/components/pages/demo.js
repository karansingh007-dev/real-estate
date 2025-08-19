
// export default WhyChooseUs;
import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Demo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className=" py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className=" text-4xl md:text-5xl  font-bold text-center mb-12"
          data-aos="fade-up"
        >
          WHY <span className="text-blue-800">CHOOSE US</span>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
        </h2>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-3 gap-8 mb-8 md:mb-12">
          <div
            className="bg-blue-100 p-8 py-4  rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-md break-words md:text-2xl font-bold mb-2">
              Easy Consultation
            </h3>

            <p className=" md:text-lg hidden md:block text-gray-700">
              We help the buyers from starting to the end of home purchase by
              understanding their needs and offering them the ideal investment
              opportunities.
            </p>
          </div>

          <div
            className="bg-blue-100 p-8 py-4 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-md break-words md:text-2xl font-bold mb-2  whitespace-normal break-words">
              on Budget
            </h3>
            <p className="text-lg hidden md:block  text-gray-700">
              We provide loan advisory, home loan facilitation, evaluation of
              mortgage options, legal assistance on long and short term
              taxation.
            </p>
          </div>

          <div
            className="bg-blue-100 p-8 py-4 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-5xl mb-4">🎧</div>
            <h3 className="text-md break-words md:text-2xl font-bold mb-2  whitespace-normal break-words">
              Consultation
            </h3>
            <p className="text-lg hidden md:block  text-gray-700">
              We believe in providing the best services to the customers so we
              don’t just stop serving them at the end of their purchase but also
              provide after-sale services.
            </p>
          </div>
        </div>

        {/* Stats with CountUp */}
        <div className="grid   grid-cols-3 md:grid-cols-5 gap-8 text-center">
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-4xl font-extrabold text-blue-800">
              <CountUp end={9} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">
              Years of Industry Experience
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl md:text-4xl font-extrabold text-blue-800">
              <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">
              Awards Recognizing Excellence
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl md:text-4xl font-extrabold text-blue-800">
              <CountUp end={2000} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="text-2xl mt-2 text-lg font-semibold">
              Satisfied Clients
            </p>
          </div>

          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold text-blue-800">
              <CountUp end={40} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">
              Collaborating Developers
            </p>
          </div>

          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold text-blue-800">
              <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2  text-lg font-semibold">
              Ongoing & Completed Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

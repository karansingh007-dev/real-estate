import React from "react";

const leadershipData = [
  {
    title: "Board of Directors",
    description:
      "Our board consists of renowned experts in real estate, infrastructure, finance, and urban planning, providing strategic direction to all our projects across Gurgaon and Delhi NCR.",
  },
  {
    title: "Development Team",
    description:
      "Our development team brings a blend of modern architecture and engineering excellence, ensuring timely and high-quality delivery of townships, towers, and commercial spaces.",
  },
  {
    title: "Principal Officers",
    description:
      "The Gurgaon Realty leadership includes experienced officers who drive innovation, ensure client satisfaction, and maintain regulatory and sustainability benchmarks at every stage.",
  },
];

const LeadershipSection = () => {
  return (
    <section className="bg-gray-100 px-8 py-12">
      <h2 className="text-2xl font-semibold text-center mb-10">WHO WE ARE</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {leadershipData.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;

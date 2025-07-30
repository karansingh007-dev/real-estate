import React, { useState, useEffect } from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: car1,
      title: "Rent your dream house now.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?",
    },
    {
      image: car2,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?",
    },
    {
      image: car3,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-start p-10 bg-black/50">
            <div className="w-3/4 text-left md:w-2/4">
              <h1 className="mt-12 text-2xl md:text-xl lg:text-3xl text-white">
                <span className="text-cyan-500">
                  {slide.title.split(" ")[0]}
                </span>{" "}
                {slide.title.split(" ").slice(1).join(" ")}
              </h1>
              <p className="mb-12 opacity-80 hidden md:block text-white text-lg">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              i === currentSlide ? "bg-white w-8" : "bg-white/50 w-4"
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

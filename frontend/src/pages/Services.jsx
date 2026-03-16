import { Code, Palette, Server, Smartphone } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build modern, scalable, and high-performance web applications tailored to your business goals.",
    icon: <Code size={28} />,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed for seamless performance and user experience.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive, engaging, and visually appealing digital experiences.",
    icon: <Palette size={28} />,
  },
  {
    title: "Backend & API Development",
    description:
      "Secure, scalable backend systems and APIs that power modern applications and integrations.",
    icon: <Server size={28} />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-15 md:pt-20 pb-16 text-center">
        <div className="flex items-center border border-gray-200 rounded-full px-5 py-1 mx-auto text-sm w-40">
          <span className="flex items-center gap-1 text-[#ff9800] font-medium">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11"
                fill="#009966"
              />
            </svg>
            OUR SERVICES
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 py-6">
          Innovative Solutions for
          <p className="text-emerald-600"> Modern Businesses</p>
        </h1>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          We provide end-to-end development services to help you build scalable,
          reliable, and user-focused digital products.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from "react";

const reasons = [
  {
    title: "AI-First Engineering",
    description:
      "We design intelligent systems from the ground up — ensuring automation, efficiency, and smarter decision-making.",
  },
  {
    title: "Architecture Built to Scale",
    description:
      "Our solutions are engineered with clean architecture and modular design to support long-term growth.",
  },
  {
    title: "Performance & Reliability",
    description:
      "We prioritize speed, resilience, and security so your systems perform under real-world demands.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From strategy to deployment, we manage the complete lifecycle of your product.",
  },
  {
    title: "Security by Design",
    description:
      "Security, compliance, and best practices are integrated at every layer.",
  },
  {
    title: "Business-Driven Outcomes",
    description:
      "We build technology aligned with your KPIs, growth goals, and measurable ROI.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="my-12 md:my-20">
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
          Why Choose Us
        </span>
      </div>

      <p className="text-center text-xl px-6 mx-auto md:px-20 lg:px-27 py-5 md:py-8">
        We combine deep AI expertise with modern engineering to build scalable,
        secure, and business-focused technology solutions.
      </p>

      <div className="relative mt-24 max-w-6xl mx-auto px-6">
        <div className="absolute left-4 top-0 w-1 h-full bg-emerald-500 md:hidden"></div>
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content Box */}
              <div className="md:w-1/2 pl-12 md:px-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-md md:-translate-x-1/2">
                {idx + 1}
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

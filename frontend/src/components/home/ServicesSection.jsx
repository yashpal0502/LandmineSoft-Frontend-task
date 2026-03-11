import React from "react";

const services = [
  {
    title: "Agentic AI, RAG & LLM Solutions",
    description:
      "We design and deploy intelligent AI agents, retrieval-augmented systems, and custom language models that automate complex workflows and enhance real-time decision-making at scale.",
  },
  {
    title: "Web & Software Product Development",
    description:
      "From architecture to deployment, we build scalable web platforms and software products with clean code, robust APIs, and performance-first design.",
  },
  {
    title: "Cloud Platforms & DevOps",
    description:
      "We architect resilient cloud infrastructure with automated CI/CD pipelines, strong security controls, and full observability to ensure reliable, scalable operations.",
  },
  {
    title: "AI-Powered Analytics & Automation",
    description:
      "Transform your data into actionable intelligence with advanced analytics, ML pipelines, and automation systems that drive faster, smarter business decisions.",
  },
  {
    title: "Mobile & Web App Experiences",
    description:
      "We create fast, intuitive web and mobile applications engineered for seamless performance, consistent design, and exceptional user experience across devices.",
  },
  {
    title: "Architecture Consulting & Tech Strategy",
    description:
      "We guide your technology roadmap with strategic architecture planning, stack selection, and scalable system design tailored to long-term innovation and growth.",
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col m-5">
      <div className="flex items-center border border-gray-200 rounded-full px-5 py-1 mx-auto text-sm w-38">
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
          What We Do
        </span>
      </div>

      <div className="bg-gray-50 rounded-lg mt-10 py-10">
        <p className="text-center text-xl px-6 mx-auto md:px-20 lg:px-27 py-5 md:py-8">
          We design, build, and scale digital solutions that turn innovation
          into measurable business impact.
        </p>

        <div className="mt-20 max-w-5xl mx-auto px-6 space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="relative pl-10 group">
              <div className="absolute left-0 top-2 h-full w-1 bg-gradient-to-b from-[#ff9800] to-transparent rounded-full"></div>
              <div className="absolute -left-[6px] top-2 w-3 h-3 bg-[#ff9800] rounded-full group-hover:scale-125 transition"></div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-emerald-600 transition">
                {service.title}
              </h3>
              <p className="mt-4 pb-5 text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <hr className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

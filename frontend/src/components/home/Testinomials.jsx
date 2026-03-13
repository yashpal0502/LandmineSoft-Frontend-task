import React from "react";

const sections = [
  {
    id: 1,
    role: "CTO, FinTech Startup",
    quote:
      "Their AI-driven architecture helped us reduce processing time by 60%. The team delivered scalable systems that handled rapid growth effortlessly.",
    author: "Aarav Mehta",
  },
  {
    id: 2,
    role: "Head of Product",
    quote:
      "From strategy to deployment, they acted as a true technology partner. Our platform launched on time and exceeded performance expectations.",
    author: "Natalie Brooks",
  },
  {
    id: 3,
    role: "Operations Director",
    quote:
      "The automation workflows they built eliminated manual bottlenecks and improved operational efficiency across departments.",
    author: "Daniel Kim",
  },
  {
    id: 4,
    role: "Founder, AI SaaS Company",
    quote:
      "Their expertise in LLM integration and cloud-native infrastructure gave us a strong technical foundation from day one.",
    author: "Priya Sharma",
  },
  {
    id: 5,
    role: "VP of Engineering",
    quote:
      "Clean architecture, strong DevOps practices, and exceptional communication — they consistently delivered high-quality code.",
    author: "Lucas Martinez",
  },
  {
    id: 6,
    role: "Digital Transformation Lead",
    quote:
      "They didn't just build software; they helped us rethink our technology strategy for long-term scalability and innovation.",
    author: "Olivia Bennett",
  },
];

const Testinomials = () => {
  return (
    <section className="py-16 px-4">
      <div className="flex items-center border border-gray-200 rounded-full px-5 py-1 mx-auto text-sm w-35">
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
          Testinomials
        </span>
      </div>
      <p className="text-center text-xl px-6 mx-auto md:px-20 lg:px-27 py-5 md:py-8">
        Hear what our users say about us. We're always looking for ways to
        improve.
      </p>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-0 pt-16">
        {sections.map((t) => (
          <article
            key={t.id}
            role="article"
            aria-label={`Testimonial by ${t.author}`}
            tabIndex={0}
            className="bg-emerald-200/70 rounded-lg p-6 shadow-sm hover:shadow-lg transform transition hover:-translate-y-1"
          >
            <p className="font-medium text-sm text-black mb-6">{t.role}</p>
            <blockquote className="text-sm text-black-100 mb-4.5">
              {t.quote}
            </blockquote>
            <cite className="text-xs text-black-300 not-italic">
              {" "}
              - {t.author}
            </cite>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testinomials;

import React from "react";

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Founder & CEO",
    bio: "AI strategist with expertise in scalable architectures and product-led growth.",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Cloud-native architect specializing in distributed systems and AI integrations.",
  },
  {
    name: "Rahul Verma",
    role: "Lead Software Engineer",
    bio: "Full-stack engineer focused on clean architecture and high-performance systems.",
  },
];

const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace emerging technologies to build intelligent, future-ready solutions.",
  },
  {
    title: "Engineering Excellence",
    description:
      "We prioritize clean code, scalable architecture, and long-term maintainability.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Our solutions are aligned with measurable business outcomes and user needs.",
  },
  {
    title: "Integrity",
    description:
      "Transparency, accountability, and trust define how we work with our partners.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-15 md:pt-20 pb-16 text-center">
        <div className="flex items-center border border-gray-200 rounded-full px-5 py-1 mx-auto text-sm w-60">
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
            ABOUT LANDMINE SOFT
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 py-6">
          Building Intelligent Systems for a
          <span className="text-emerald-600"> Digital-First World</span>
        </h1>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Landmine Soft is a focused engineering team helping startups and
          enterprises design, develop, and deploy AI-powered applications,
          scalable web platforms, and secure cloud-native backends.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted global technology partner that empowers
            organizations through intelligent, scalable, and reliable digital
            solutions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To engineer AI-driven products and modern software systems that
            solve real-world business challenges while delivering measurable
            impact and long-term value.
          </p>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Problems We Solve
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Many organizations struggle with scaling technology, modernizing
            legacy systems, and implementing AI effectively. We bridge the gap
            between innovation and execution.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
            <div className="p-8 border border-gray-300 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">Legacy Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Modernizing outdated systems with cloud-native and scalable
                architectures.
              </p>
            </div>
            <div className="p-8 border border-gray-300 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">Manual Workflows</h3>
              <p className="text-gray-600 text-sm">
                Automating repetitive processes using AI and intelligent
                systems.
              </p>
            </div>
            <div className="p-8 border border-gray-300 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">Scaling Challenges</h3>
              <p className="text-gray-600 text-sm">
                Designing reliable systems that scale seamlessly with business
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="py-10 md:py-15 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-300 shadow-sm hover:shadow-md transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-6"></div>
              <h3 className="font-semibold text-lg text-gray-900">
                {member.name}
              </h3>
              <p className="text-purple-600 text-sm mb-4">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>

          <div className="mt-16 grid md:grid-cols-2 gap-10 text-left">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-2xl shadow-sm"
              >
                <h3 className="font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";

const jobs = [
  {
    title: "Frontend Developer (React)",
    location: "Remote / India",
    type: "Full-Time",
  },
  {
    title: "Backend Engineer (Node.js)",
    location: "Hybrid - Guntur",
    type: "Full-Time",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "AI/ML Engineer",
    location: "Remote / India",
    type: "Full-Time",
  },
];

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-15 md:pt-20 pb-16 text-center">
        <div className="flex items-center border border-gray-200 rounded-full px-5 py-1 mx-auto text-sm w-30">
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
            Careers
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 py-6">
          Build the Future of Intelligent
          <p className="text-emerald-600"> Software With Us</p>
        </h1>
        <p className="mt-8 text-lg text-gray-600">
          Join a passionate team building scalable AI systems, cloud-native
          platforms, and impactful digital products.
        </p>
      </section>

      {/* Company Culture */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Culture
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Landmine Soft, we value ownership, clarity, and continuous
            innovation. We work collaboratively, communicate openly, and focus
            on building solutions that create measurable impact.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We encourage experimentation, learning, and growth while maintaining
            high engineering standards.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why Work With Us
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>✔ Work on real AI & cloud-native projects</li>
            <li>✔ Flexible remote-first culture</li>
            <li>✔ Growth-focused environment</li>
            <li>✔ Ownership and decision-making freedom</li>
            <li>✔ Competitive compensation</li>
          </ul>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Open Positions
          </h2>

          <div className="mt-16 space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 border border-gray-300 p-8 rounded-2xl hover:shadow-md transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {job.location} • {job.type}
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-[#ff9800] transition duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {" "}
          Didn't Find a Suitable Role?
        </h2>
        <p className="mt-6 text-gray-600">
          Send us your resume and we'll reach out when a matching opportunity
          opens.
        </p>
        <button className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-[#ff9800] transition duration-300">
          Submit Resume
        </button>
      </section>
    </div>
  );
};

export default Careers;

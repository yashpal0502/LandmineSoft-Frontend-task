import React from "react";

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "FastAPI", "GraphQL"],
  },
  {
    category: "AI / ML",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "LangChain",
      "Hugging Face",
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
];

const Technologies = () => {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center border border-gray-200 rounded-full px-5 py-1 mx-auto text-sm w-50">
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
          Technologies We Use
        </span>
      </div>
      <p className="text-center text-xl px-6 mx-auto md:px-20 lg:px-27 py-5 md:py-8">
        We leverage modern, battle-tested technologies to build scalable,
        secure, and high-performance digital products.
      </p>

      {/* Tech Categories */}

      <div className="mt-18 md:mt-24 max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

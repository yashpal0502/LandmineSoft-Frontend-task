import React from "react";

const CompanyIntro = () => {
  return (
    <div>
      {/* banner */}
      <div className="flex items-center border border-gray-200 rounded-full px-3 py-1 mx-auto text-sm w-60">
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
          Modern Digital Company Feel
        </span>
      </div>

      {/* Intro */}
      <p className="text-center text-xl px-6 mx-auto md:px-20 lg:px-27 py-5 md:py-8">
        We help businesses transform AI/ML ideas into scalable, production-ready
        software. From product engineering to cloud platforms, we build systems
        designed for reliability and growth.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-8 mx-5 md:mx-8 py-10">
        <div className="flex bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300 md:w-3/4">
          <div className="flex w-64 bg-[#ff9800] justify-center pt-10">
            <div className="w-28 h-28 pl-5 overflow-hidden">
              <i className="fa-solid fa-1 text-5xl text-green-700"></i>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium pl-2 mt-3 font-poppins">
              AI & Machine Learning Solutions
            </p>
            <p className="text-gray-500 text-sm px-5 py-2">
              From model development and training to production deployment, we
              deliver robust AI/ML solutions that integrate seamlessly into your
              products and workflows.
            </p>
            <button className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 mb-3 rounded-full mt-5">
              <p className="mb-1">Get Started →</p>
            </button>
          </div>
        </div>
        <div className="flex bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300 md:w-3/4">
          <div className="flex flex-col items-center">
            <p className="font-medium pl-2 mt-3 font-poppins">
              Product & Software Development
            </p>
            <p className="text-gray-500 text-sm px-5 py-2">
              Using modern architectures, secure APIs, and modular design
              principles, we develop high-performance web and backend systems
              built to scale with your business.
            </p>
            <button className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 mb-3 rounded-full mt-5">
              <p className="mb-1">Get Started →</p>
            </button>
          </div>
          <div className="flex w-64 bg-[#ff9800] justify-center pt-10">
            <div className="w-28 h-28 pl-5 overflow-hidden">
              <i className="fa-solid fa-2 text-5xl text-green-700"></i>
            </div>
          </div>
        </div>
        <div className="flex bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300 md:w-3/4">
          <div className="flex w-64 bg-[#ff9800] justify-center pt-10">
            <div className="w-28 h-28 pl-5 overflow-hidden">
              <i className="fa-solid fa-3 text-5xl text-green-700"></i>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium pl-2 mt-3 font-poppins">
              Mobile & Cloud-Native Apps
            </p>
            <p className="text-gray-500 text-sm px-5 py-2">
              From native mobile development to cloud-native architectures, we
              deliver resilient, scalable applications optimized for modern
              infrastructure and global users.
            </p>
            <button className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 mb-3 rounded-full mt-5">
              <p className="mb-1">Get Started →</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;

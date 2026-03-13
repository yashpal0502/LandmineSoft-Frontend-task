import React from "react";
import Hero from "../components/home/Hero";
import CompanyIntro from "../components/home/CompanyIntro";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Technologies from "../components/home/Technologies";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesSection />
      <WhyChooseUs />
      <Technologies />
    </>
  );
};

export default Home;

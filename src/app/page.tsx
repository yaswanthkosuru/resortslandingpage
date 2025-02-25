"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Introduction from "@/components/Introduction";
import React from "react";
import { useEffect, useState } from "react";
import Details from "@/components/details";
import NavBar from "@/components/Navbar";
import Steps from "@/components/Steps";
import { motion } from "motion/react";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  const text =
    "At ELEMENTIS, we use the Integrative Wellness approach, that considers psychological, physical, and nutritional aspects of your life to improve overall well-being and balance.";

  return (
    <div>
      <NavBar />
      <Hero />
      <Introduction />
      <Details />
      {/* <Parallax /> */}
      {/* <StickyRelativeDemo /> */}
      <Steps />

      <Testimonials />
      <div id="contact-form">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

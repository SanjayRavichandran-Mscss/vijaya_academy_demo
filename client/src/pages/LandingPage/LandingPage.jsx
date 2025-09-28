import React from "react";
import Header from "../../components/LandingPageComponents/Header";
import Banner from "../../components/LandingPageComponents/Banner";
import ExamCategories from "../../components/LandingPageComponents/ExamCategories";
import TrustedByStudents from "../../components/LandingPageComponents/TrustedByStudents";
import StudyResources from "../../components/LandingPageComponents/StudyResources";
import Footer from "../../components/LandingPageComponents/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
        <ExamCategories />
        <TrustedByStudents />
        <StudyResources />
        <Footer />
    </>
  );
}

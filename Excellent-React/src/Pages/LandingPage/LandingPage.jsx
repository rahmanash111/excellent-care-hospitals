import "./LandingPage.css";
import HospitalHeroSection from "../../Components/heroSection";
import WhyChooseUs from "../../Components/chooseUs";
import PatientTools from "../../Components/patientTools";
import Testimonials from "../../Components/testimonials";

// import SEO from "../utils/SEO";
import DirectorsTabs from "./DirectorsTabs";
import Specialties from "./Specialties";
import Update from "./Update";
import FAQCallbackSection from "./FAQCallbackSection";

const LandingPage = () => {
  return (<>
    {/* <SEO description={LANDINGPAGE_DESC} title={LANDINGPAGE_TITLE} keywords={LANDINGPAGE_KEYWORDS}/> */}
    <div className="universal-component-wrapper">
      <HospitalHeroSection />
      <Specialties />
      <DirectorsTabs />
      <WhyChooseUs />
      <PatientTools />
      <Update />
      <Testimonials />
      <FAQCallbackSection />
    </div>
  </>
  );
};

export default LandingPage;

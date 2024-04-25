import AuthWrapper from "../components/AuthWrapper";
import Everything from "../components/Landing/Everything";
import FiverrBusiness from "../components/Landing/FiverrBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinFiverr from "../components/Landing/JoinFiverr";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import Testimonials from "../components/testimonials";
import Newsletter from "../components/Landing/newsletter";
import Pricing from "../components/Landing/pricing";
import { useStateProvider } from "../context/StateContext";
import React from "react";

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();

  return (
    <div className="bg-white dark:bg-darkscreen">
      <HeroBanner />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      <Pricing/>
      <JoinFiverr />
      <Testimonials/>
      <Newsletter/>
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Index;

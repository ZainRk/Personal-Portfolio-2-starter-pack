import React from "react";
import Experties from "../Experties/Experties";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import Portfolio from "../Portfolio/Portfolio";
import People from "../People/People";
import useScrollToTop from "../../hooks/useScrollToTop";

const Content = () => {
  useScrollToTop();

  return (
    <div>
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
    </div>
  );
};

export default Content;

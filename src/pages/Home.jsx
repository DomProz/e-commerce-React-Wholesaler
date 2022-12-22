import { SignalCellular0Bar } from "@material-ui/icons";
import React from "react";
import Annoucment from "../components/Annoucment";
import Categories from "../components/Categories";

import Navbar from "../components/Navbar";

import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Annoucment />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;

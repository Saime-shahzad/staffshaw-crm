import React from "react";
import Index from "../layout/Index";
import { Header } from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Layout-Parrent">
        <Index />
      </div>
    </div>
  );
};
export default Home;

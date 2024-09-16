import React from "react";
import First from "./first/first.jsx";
import FnavBar from "./FnavBar/FnavBar.jsx";
import SecondNav from "./SecondNav/SecondNav.jsx";
import FirstSection from "./FirstSection/FirstSection.jsx";
import SecondSection from "./SecondSection/SecondSection.jsx";

const App = () => {
  return (
    <div>
      <First />
      <FnavBar />
      <SecondNav />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default App;

import React from "react";
import First from "./first/first.jsx";
import FnavBar from "./FnavBar/FnavBar.jsx";
import SecondNav from "./SecondNav/SecondNav.jsx";
import FirstSection from "./FirstSection/FirstSection.jsx";
import SecondSection from "./SecondSection/SecondSection.jsx";
import ThirdSection from "./ThirdSection/ThirdSection.jsx";

const App = () => {
  return (
    <div>
      <First />
      <FnavBar />
      <SecondNav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />  
    </div>
  );
};

export default App;

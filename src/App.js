import React from "react";
import First from "./first/first.jsx";
import FnavBar from "./FnavBar/FnavBar.jsx";
import SecondNav from "./SecondNav/SecondNav.jsx";
import FirstSection from "./FirstSection/FirstSection.jsx";
import SecondSection from "./SecondSection/SecondSection.jsx";
import ThirdSection from "./ThirdSection/ThirdSection.jsx";
import ForthSection from "./ForthSection/ForthSection.jsx";
import FifthSection from "./FifthSection/FifthSection.jsx";
import SixthSection from "./SixthSection/SixthSection.jsx";

const App = () => {
  return (
    <div>
      <First />
      <FnavBar />
      <SecondNav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />  
      <ForthSection />  
      <FifthSection />
      <SixthSection />
    </div>
  );
};

export default App;

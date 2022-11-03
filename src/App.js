import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;

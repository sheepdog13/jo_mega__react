import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import InputSample from "./components/InputSample";
import Movie from "./components/Movie";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <InputSample/>
      <Banner/>
      <Movie/>
      
    </div>
  );
}

export default App;

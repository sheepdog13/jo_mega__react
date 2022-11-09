import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Movie from "./components/Movie";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Banner/>
      <Movie/>
    </div>
  );
}

export default App;

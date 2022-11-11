import React from "react";
import Banner from "./components/Banner";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import Movie from "./components/Movie";
import New from "./components/New";
import Opening from "./components/Opening";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Banner/>
      <Movie/>
      <Event />
      <Opening />
      <New />
      <Help />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import FooterContact from "./components/FooterContact";
import Details from "./pages/Details";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:itemId" element={<Details />} />
        </Routes>
      </main>
      <FooterContact />
    </>
  );
};

export default App;

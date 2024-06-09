import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebooks from "../components/Freebooks";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Freebooks></Freebooks>
      <Footer></Footer>
    </>
  );
}

export default Home;

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
// import { AuthContextProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <ParallaxProvider>
      {/* <AuthContextProvider> */}
      <Layout>
        <Hero />
        <Services />
        <Approach />
        <Testimonials />
        <Contact />
      </Layout>
      {/* </AuthContextProvider> */}
    </ParallaxProvider>
  );
}

export default App;

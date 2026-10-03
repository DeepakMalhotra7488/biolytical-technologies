  import React, { useEffect, useState } from "react";
  import { createRoot } from "react-dom/client";

  import { Preloader } from "./components/Preloader";
  import { Header } from "./components/Header";
  import { Footer } from "./components/Footer";
  import { BackToTop } from "./components/Back_To_Top";

  import { Home } from "./pages/Home";
  import { About } from "./pages/About";
  import { Contact } from "./pages/Contact";
  import { Products } from "./pages/Products";
  import { Services } from "./pages/Services";


  import { AnalyticalInstruments } from "./pages/products/AnalyticalInstruments";
  import { MeasuringInstruments } from "./pages/products/MeasuringInstruments";
  import { TestingInstruments } from "./pages/products/TestingInstruments";
  import { ProcessingInstruments } from "./pages/products/ProcessingInstruments";




  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.min.js";
  import "./styles.css";

  import {BrowserRouter,Routes,Route} from "react-router-dom";

  function Layout({ children }) {

    return (
      <>
        <Preloader />
        <Header />
        <section>
          {children}
        </section>    
        <Footer />
        <BackToTop />
      </>
    );
  }


  function App() {

    return (
      <BrowserRouter>

        <Layout>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/products"
              element={<Products />}
            />
            
            <Route
              path="/products/analytical"
              element={<AnalyticalInstruments />}
            />

            <Route
              path="/products/measuring"
              element={<MeasuringInstruments />}
            />

            <Route
              path="/products/testing"
              element={<TestingInstruments />}
            />

            <Route
              path="/products/processing"
              element={<ProcessingInstruments />}
            />

            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="*"
              element={<Home />}
            />

          </Routes>

        </Layout>

      </BrowserRouter>
    );
  }


  createRoot(
    document.getElementById("root")
  ).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
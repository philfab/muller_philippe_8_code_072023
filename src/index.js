import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

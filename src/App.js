import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./featured/header/Header";
import Footer from "./featured/footer/Footer";
import Main from "./components/Layout";
import Gadgets from "./pages/Gadgets";
import VideoCards from "./components/VideoCards";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gadgets" element={<Gadgets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

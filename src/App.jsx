import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import "./styles/App.css";

const Home = lazy(() => import("./pages/Home"));
const SobreMim = lazy(() => import("./pages/SobreMim"));
const Projects = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contato"));

function App() {
  return (
    <Router>
      <Header />

      <Suspense fallback={<div className="page-loading" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SobreMim />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;

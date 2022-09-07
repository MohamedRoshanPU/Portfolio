import "./App.scss";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./Components/Works";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

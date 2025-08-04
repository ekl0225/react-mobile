import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BurgerMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

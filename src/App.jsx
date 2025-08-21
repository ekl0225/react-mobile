import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import MoodBoards from "./pages/MoodBoards";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <BurgerMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moodboards" element={<MoodBoards />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

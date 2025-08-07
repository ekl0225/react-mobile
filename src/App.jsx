import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import MoodBoards from "./pages/MoodBoards";
import Header from "./components/Header";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <BurgerMenu />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/moodboards" element={<MoodBoards />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

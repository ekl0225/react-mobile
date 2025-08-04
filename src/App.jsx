import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import MoodBoards from "./pages/MoodBoards";

function App() {
  return (
    <Router>
      <BurgerMenu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/moodboards" element={<MoodBoards />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

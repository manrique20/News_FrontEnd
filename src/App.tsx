import { Navbar } from "react-bootstrap";
import HomeScreen from "./Components/Screens/HomeScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewsContent from "./Components/Screens/NewsContent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/news/:id" element={<NewsContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

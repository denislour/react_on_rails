import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React on Rails Blogs</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

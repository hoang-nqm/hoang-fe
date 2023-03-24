import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import EditPage from "./pages/EditPage/EditPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/editpage" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;

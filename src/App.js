import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

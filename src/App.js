import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about-us" exact element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

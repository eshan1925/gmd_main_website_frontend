import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

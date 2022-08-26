import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import ProjectManager from "./components/ProjectManager";
import BlogsComponent from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import ReadBlog from "./components/ReadBlog";

function App() {
  const user = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignUp />} />
          {user && (
            <Route
              path="/project-manager/:id"
              exact
              element={<ProjectManager userData={userData} />}
            />
          )}
          {user && (
            <Route
              path="/blogs/:id/all-blogs"
              exact
              element={
                <BlogsComponent userData={userData} category="all-blogs" />
              }
            />
          )}
          {user && (
            <Route
              path="/blogs/:id/my-blogs"
              exact
              element={
                <BlogsComponent userData={userData} category="my-blogs" />
              }
            />
          )}
          {user && (
            <Route
              path="/blogs/:id/favourite"
              exact
              element={
                <BlogsComponent userData={userData} category="Favourite" />
              }
            />
          )}
          {user && (
            <Route
              path="/blogs/:id/create-new-blog"
              exact
              element={<CreateBlog userData={userData} />}
            />
          )}
          {user && (
            <Route
              path="/blogs/:id/all-blogs/:blogid"
              exact
              element={<ReadBlog userData={userData} category="all-blogs"/>}
            />
          )}
          {user && (
            <Route
              path="/blogs/:id/my-blogs/:blogid"
              exact
              element={<ReadBlog userData={userData} category="my-blogs"/>}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

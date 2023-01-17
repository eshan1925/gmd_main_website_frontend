import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import ProjectManager from "./components/ProjectManager";
import BlogsComponent from "./components/Blogs";
import CreateBlog from "./components/Blogs/CreateBlog";
import ReadBlog from "./components/Blogs/ReadBlog";
import ProfilePage from "./components/ProfilePage";
import SocialMediaFeed from "./components/SocialMediaFeed";
import SocialMediaFeedProfile from "./components/SocialMediaFeed/SocialMediaFeedProfile";
import VerificationPage from "./components/VerificationPage";
import Username from "./components/SignUpPage/Username";
import DynamicPortfolio from "./components/DynamicPortfolio";
import Community from "./components/Community";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/NotFound";

// CONTRA components
// import ProfilePicture from "./components/DynamicPortfolio/ProfilePic";
// import DOBGenLoc from "./components/DynamicPortfolio/DOBGenLoc";
// import ProjectsAndServices from "./components/DynamicPortfolio/ProjectsAndServices";
// import EditPortfolio from "./components/DynamicPortfolio/EditPortfolioPage";
// import ViewPortfolio from "./components/DynamicPortfolio/ViewPortfolio";

function App() {
  //TODO POST,SocialMediaFeedProfile ka logging
  const user = sessionStorage.getItem("token");
  const userData = sessionStorage.getItem("userData");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route
            path="/getmedesign/:token/verification/:userid"
            exact
            element={<VerificationPage />}
          />
          <Route
            path="/sign-up/username-mobile-number/:id"
            exact
            element={<Username userData={userData} />}
          />

          <Route
            path="/getmedesign/:token/reset-new-password/:id"
            exact
            element={<ForgotPassword userData={userData} />}
          />

          {userData && (
            <Route
              path="/social-feed/:id"
              exact
              element={<SocialMediaFeed userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/portfolio-section/:id"
              exact
              element={<DynamicPortfolio userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/social-feed/profile/:id"
              exact
              element={<SocialMediaFeedProfile userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/project-manager/:id"
              exact
              element={<ProjectManager userData={userData} />}
            />
          )}
          {userData && (
            <Route
              path="/blogs/:id"
              exact
              element={<BlogsComponent userData={userData} />}
            />
          )}
          {userData && (
            <Route
              path="/blogs/:id/create-new-blog"
              exact
              element={<CreateBlog userData={userData} />}
            />
          )}
          {userData && (
            <Route
              path="/blogs/:id/:blogid"
              exact
              element={<ReadBlog userData={userData} />}
            />
          )}
          {/* {userData && (
            <Route
              path="/blogs/:id/my-blogs/:blogid"
              exact
              element={<ReadBlog userData={userData} category="my-blogs" />}
            />
          )} */}
          {userData && (
            <Route
              path="/profile/:id"
              exact
              element={<ProfilePage userData={userData} />}
            />
          )}
          {userData && (
            <Route
              path="/community-forum/:id"
              exact
              element={<Community userData={userData} />}
            />
          )}

          {/* ROUTES FOR CONTRA FUNCTIONALITY PORTFOLIO
          {userData && (
            <Route
              path="/complete-your-profile/display-picture-liner/:id"
              exact
              element={<ProfilePicture userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/complete-your-profile/date-of-birth-and-gender-location/:id"
              exact
              element={<DOBGenLoc userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/complete-your-profile/projects-and-services/:id"
              exact
              element={<ProjectsAndServices userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/getmedesign/edit-portfolio/:id"
              exact
              element={<EditPortfolio userData={userData} />}
            />
          )}

          {userData && (
            <Route
              path="/getmedesign/view-portfolio/:id"
              exact
              element={<ViewPortfolio userData={userData} />}
            />
          )} */}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

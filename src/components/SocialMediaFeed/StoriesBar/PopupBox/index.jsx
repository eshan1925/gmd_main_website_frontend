//https://www.npmjs.com/package/react-insta-stories?activeTab=readme

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stories, { WithSeeMore } from "react-insta-stories";
import DialogTitle from "@mui/material/DialogTitle";
import "./extra.css";

export default function MaxWidthDialog(props) {
  const profileInfo = props.profileInfo;
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const stories = document.querySelectorAll("#stories-container .story");
  stories.forEach((story) => {
    story.addEventListener("click", () => {
      stories.forEach((s) => {
        s.classList.remove("active");
      });

      if (!story.querySelector(".profile").classList.contains("visited")) {
        story.classList.add("active");
      }
    });
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const image = {
  //   display: "block",
  //   maxWidth: "100%",
  //   borderRadius: 4,
  // };

  // const contentStylestoryback = {
  //   background: "black",
  //   width: "100%",
  //   padding: 20,
  //   color: "white",
  // };

  // const code = {
  //   background: "#eee",
  //   padding: "5px 10px",
  //   borderRadius: "4px",
  //   color: "#333",
  // };

  // const contentStyle = {
  //   background: "salmon",
  //   width: "100%",
  //   padding: 20,
  //   color: "white",
  // };

  // const customSeeMore = {
  //   textAlign: "center",
  //   fontSize: 14,
  //   bottom: 20,
  //   position: "relative",
  // };

  // const Story2 = ({ action, isPaused }) => {
  //   return (
  //     <div
  //       style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
  //     >
  //       <h1>Hope you like shivam's story 😄.</h1>

  //       <h4>
  //         Wanna create journey stories like these. <br /> Download cube stop
  //         travel app 🎉
  //       </h4>
  //       {/* <p>React Native version coming soon.</p> */}
  //     </div>
  //   );
  // };

  // const stories2 = [
  //   {
  //     content: ({ action, isPaused }) => {
  //       return (
  //         <div style={contentStyle}>
  //           <h1>Hey All 👋</h1>
  //           <h1>Check shivam's journey story.</h1>

  //           {/* <pre>
  //             <code style={code}>here they are 😄 -></code>
  //           </pre> */}
  //           <img
  //             style={image}
  //             src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
  //           ></img>
  //           <h4>stories creted by Cubestop travel app</h4>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     content: ({ action, isPaused }) => {
  //       return (
  //         <div style={contentStyle}>
  //           <h1>Hey All 👋</h1>
  //           <h1>Check shivam's journey story.</h1>

  //           {/* <pre>
  //             <code style={code}>here they are 😄 -></code>
  //           </pre> */}
  //           <img
  //             style={image}
  //             src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
  //           ></img>
  //           <h4>stories creted by Cubestop travel app</h4>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     content: ({ action, story }) => {
  //       return (
  //         <WithSeeMore story={story} action={action}>
  //           <div style={{ background: "pink", padding: 20 }}>
  //             <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
  //             <h1 style={{ marginTop: 5 }}>
  //               Here is the location journey story created for the shivam's
  //               journey.
  //             </h1>
  //           </div>
  //         </WithSeeMore>
  //       );
  //     },
  //     seeMoreCollapsed: ({ toggleMore, action }) => (
  //       <p style={customSeeMore} onClick={() => toggleMore(true)}>
  //         A custom See More message →
  //       </p>
  //     ),
  //     seeMore: ({ close }) => (
  //       <div
  //         style={{
  //           maxWidth: "100%",
  //           height: "100%",
  //           padding: 40,
  //           background: "white",
  //         }}
  //       >
  //         <h2>Just checking the see more feature.</h2>
  //         <p style={{ textDecoration: "underline" }} onClick={close}>
  //           Go on, close this popup.
  //         </p>
  //       </div>
  //     ),
  //     duration: 1000,
  //   },
  //   {
  //     content: ({ action, isPaused }) => {
  //       return (
  //         <div style={contentStylestoryback}>
  //           <img style={image} src="https://i.ibb.co/MGbfDTH/Group-13.png" />
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     content: Story2,
  //   },
  // ];

  const stories3 = [
    {
      url: "https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg",
      duration: 5000,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://www.w3schools.com/w3images/avatar1.png",
      },
    },
    {
      url: "https://i.ibb.co/MGbfDTH/Group-13.png",
      duration: 5000,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://www.w3schools.com/w3images/avatar1.png",
      },
    },
  ];

  const actualStory = "k";
  return (
    <React.Fragment>
      <div className="story" onClick={handleClickOpen}>
        <div className="profile">
          <img src={profileInfo.userImg} alt="" />
        </div>
      </div>
      <div></div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        {/* <div className="storyHeading">
          <div className="story" onClick={handleClickOpen}>
            <div className="profile">
              <img src={profileInfo.userImg} alt="" />
            </div>
          </div>
          <DialogTitle>{profileInfo.userName}</DialogTitle>
        </div> */}
        <DialogContent>
        <Stories
            loop
            keyboardNavigation
            defaultInterval={5000}
            stories={stories3}
            onAllStoriesStart={(s,st)=>console.log("stories started",s,st)}
            onStoryEnd={(s, st) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
            onStoryStart={(s, st) => console.log("story started", s, st)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

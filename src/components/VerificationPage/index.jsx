import React, { useState } from "react";
import axios from "axios";

const VerificationPage = () => {
  const [verification, setVerification] = useState(false);
  const currentUrl = window.location.href;
  var splitURL = currentUrl.toString().split("/");
  var currentUser = splitURL.splice(-1);
  const token = splitURL[splitURL.length-2];
  function redirectPage() {
    document.location.href = "http://localhost:3000/sign-up/username-mobile-number/"+currentUser;
  }

  const profileLoginFunction = async (e) => {
    const url =
      "http://localhost:8080/api/users/" + currentUser + "/verify/" + token;
    const res = await axios.get(url);
    if (res.status === 200) {
      setVerification(true);
      console.log("A new user was verified!!!");
      const sessionUser = await axios.get(
        "http://localhost:8080/profile/" + currentUser
      );
      //   sessionStorage.setItem("token", res.data);
      sessionStorage.setItem("userData", JSON.stringify(sessionUser));
      console.log(
        "New login to the system...\nuser Details-: " +
          JSON.stringify(sessionUser)
      );

      setTimeout(redirectPage, 5000);
    }
  };

  React.useEffect(() => {
    profileLoginFunction();
  });

  return (
    <div className="card">
      <div className="cardi">
        <i className="checkmark">✓</i>
      </div>
      {verification ? (
        <h1 className="sucessMsg">Success</h1>
      ) : (
        <h1 className="sucessMsg">Failure</h1>
      )}
      <p className="message">
        Congratulations!!! You are verified;
        <br /> Please wait, you are being redirected...
      </p>
    </div>
  );
};

export default VerificationPage;

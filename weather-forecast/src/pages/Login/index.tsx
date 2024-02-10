import React from "react";
import "./styles.scss";
import BootUpWindow from "../../components/BootUpWindow/BootUpWindow";


export default function LoginPage({ setIsLoginPage }: any) {
  const [password, setPassword] = React.useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setPassword("");
      setIsLoginPage(false);
    }
  };

  //   const openInNewTab = (url: any) => {
  //     setShowDialog(false);
  //     window.open(url, "_blank", "noreferrer");
  //   };

  return (
    <div className="login-page">
      <BootUpWindow/>
      <div className="login-page-input">
        <img
          className="login-page-avatar"
          src="https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_183241_IMG_0017-xl.jpg"
          alt="Avatar"
        />
        <p className="login-page-username">Hunter Biden's Laptop</p>
        {/* <p className="login-page-ca">
          <span>CA:</span> HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7
        </p> */}

        <input
          className="login-page-input-field"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onSubmit={() => alert("")}
          onKeyDown={handleKeyDown}
        ></input>
        <p className="login-page-hint">Hint: Password</p>
      </div>
    </div>
  );
}

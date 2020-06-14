import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function Sidebar() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div
        style={{
          textAlign: "center",
          overflow: "auto",
        }}
      >
        <Menu>
          <a className="menu-item" href="/">
            Home
          </a>
          <button
            onClick={() => setSignUpModalShown({ signUpModalShown: true })}
          >
            Sign Up
          </button>
          <button onClick={() => console.log("do something")}>Log in</button>
          <button onClick={() => console.log("do something")}>
            <font size="5">
              <font color="black">Log In</font>
            </font>
          </button>
          <button onClick={() => console.log("signing up")}>
            <font size="5">
              <font color="black">Sign Up</font>
            </font>
          </button>
        </Menu>
      </div>
    </div>
  );
}

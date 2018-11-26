import React from "react";
import NavBar from "./NavBar";

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "About", key: "about" },
  { as: "a", content: "Contact", key: "contact" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

const Header = () => {
  return <NavBar leftItems={leftItems} rightItems={rightItems} />;
};

export default Header;

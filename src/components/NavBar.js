import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key={links.id} href="#home">Home</a>
    <a key={links.id} href="#about">About</a>
    <a key={links.id} href="#projects">Projects</a>
    </nav>;
 }


export default NavBar;

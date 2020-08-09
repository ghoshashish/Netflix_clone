import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://assets.brand.microsites.netflix.io/assets/5a5c367c-8198-11e9-bf79-066b49664af6_cm_320w.png?v=59"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://images.squarespace-cdn.com/content/v1/56254f59e4b09fbd9e1b10c4/1454390644371-Z2PXLPTTXN4YFY2NS5FP/ke17ZwdGBToddI8pDm48kO1ixY_g4iL0qEQcYePj6GQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2aY8SHvM4mSbAEhNw4EAI1-fTurc3Vye47SYcVgY45ioKMshLAGzx4R3EDFOm1kBS/image-asset.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;

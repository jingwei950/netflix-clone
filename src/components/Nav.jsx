import React, { useEffect, useState } from "react";
import "./Nav.css";


function Nav() {
  const [show, handleShow] = useState(false);

  //Transition function for setting the state of navigation bar
  const transitionNavBar = () => {
      //When Navigation is more than 100px
      if(window.scrollY > 100){
          handleShow(true); //Make handleShow to true
      }
      else{ //When Navigation is less than 100px
          handleShow(false); //Make handleShow to false
      }
  }

  useEffect(() => {
      //Give the window an event listener to monitor the scrolling
      window.addEventListener("scroll", transitionNavBar);

      //Remove the window event listener
      return () => window.removeEventListener("scroll", transitionNavBar)
  } ,[])

  return (
    <div className={`nav ${show && "nav_black"}`}> {/* when "show" state is true place the "nav_black" style transition */}
    
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <div className="nav_items">
          <a style={{paddingLeft: "50px"}} href="/">Home</a>
          <a href="/">Series</a>
          <a href="/">Films</a>
          <a href="/">New & Popular</a>
          <a href="/">My List</a>
          {/* <p>Home</p>
          <p>Series</p>
          <p>Films</p>
          <p>New & Popular</p>
          <p>My List</p> */}
        </div>

      </div>
      <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
    </div>
  );
}

export default Nav;

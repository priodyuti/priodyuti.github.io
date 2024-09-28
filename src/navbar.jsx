// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import AddIcon from '@mui/icons-material/Add';
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import FastForwardTwoToneIcon from "@mui/icons-material/FastForwardTwoTone";

// function Navbar() {
//   return (
//     <>
      // <div className="navbar1">
      //   <div className="nav_cont">
      //     <ul className="d-flex justify-content-evenly py-3">
      //       <li>
      //         <NavLink className="a" to="/">
      //           Home
      //         </NavLink>
      //       </li>
      //       <li>
      //         <NavLink className="a" to="/Research">
      //           Research
      //         </NavLink>
      //       </li>
      //       <li>
      //         <NavLink className="a" to="/Publications">
      //           Publications
      //         </NavLink>
      //       </li>
      //       <li>
      //         <NavLink className="a" to="/Lab">
      //           Research Group
      //         </NavLink>
      //       </li>
      //       <li>
      //         <NavLink className="a">Highlights</NavLink>
      //       </li>
      //       <li>
      //         <NavLink className="a" to="/Teaching">
      //           Teaching
      //         </NavLink>
      //       </li>
      //       <li style={{ "--i": 6 }}>
      //         <NavLink className="a" to="/">
      //           About Us
      //         </NavLink>
      //       </li>
      //       <li>
      //         <NavLink className="a" to="/Contact">
      //           Contact Us
      //         </NavLink>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
//     </>
//   );
// }

// export default Navbar;













import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file for styling
// import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FastForwardTwoToneIcon from "@mui/icons-material/FastForwardTwoTone";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="NavBar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <figure>
              <img src="img/logo2.png" className='px-3' alt="logo" />
          </figure>
        </div>
        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="navbar-item">
            {/* <a href="#" className="navbar-link">Home</a> */}
            <NavLink className="navbar-link" to="/">
               Home
              </NavLink>
          </li>
          <li className="navbar-item">
            {/* <a href="#" className="navbar-link">About</a> */}
            <NavLink className="navbar-link" to="/Research">
                Research
              </NavLink>
          </li>
          <li className="navbar-item">
            {/* <a href="#" className="navbar-link">Services</a> */}
            <NavLink className="navbar-link" to="/Publications">
                Publications
              </NavLink>
          </li>
          <li className="navbar-item">
            {/* <a href="#" className="navbar-link">Contact</a> */}
            <NavLink className="navbar-link" to="/Lab">
                Research Group
              </NavLink>
          </li>
          <li className="navbar-item">
            {/* <a href="#" className="navbar-link">Contact</a> */}
            <NavLink className="navbar-link" to="/Highlights">Highlights</NavLink>
          </li>
          <li className="navbar-item">
            {/* <a href="#" className="navbar-link">Contact</a> */}
            <NavLink className="navbar-link" to="/Teaching">
                Teaching
              </NavLink>
          </li>
          <li className="navbar-item">
              <NavLink className="navbar-link" to="/">
                About Us
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/Contact">
                Contact Us
              </NavLink>
            </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={isOpen ? 'line line-1 active' : 'line line-1'}></div>
          <div className={isOpen ? 'line line-2 active' : 'line line-2'}></div>
          <div className={isOpen ? 'line line-3 active' : 'line line-3'}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import GoogleMap from './GoogleMap';
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FastForwardTwoToneIcon from "@mui/icons-material/FastForwardTwoTone";

function Contact() {
  return (
    <>
    <div className="contact-container">
      <div className="contact mb-1">
        <div className="contact-cont">

            {/* <GoogleMap /> */}

            <ul className="d-flex justify-content-evenly mt-1 text-center">
                <li>
                    <h2>Location</h2>
                    <p>Indian Institute of Information Technology Raichur <br />
                       Transit in Government Engineering College (GEC), Yermarus Camp <br />
                       Karnataka -584135, India
                    </p>
                </li>
                <li>
                    <h2>Details</h2>
                    <h4>Dr. Priodyuti Pradhan</h4>
                    <p>​Assistant Professor<br />
                    ​Department of Computer Science & Engineering<br />
                    ​Indian Institute of Information Technology Raichur</p>
                </li>
                <li>
                    <h2>E-mail</h2>
                    <h4>prio@iiitr.ac.in</h4>
                </li>
            </ul>
        </div>
      </div>
      <div className="map">
      <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15322.692593263166!2d77.3668853!3d16.23723465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692180718860!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
      </section>
      </div>
      </div>
    </>
  );
}

export default Contact;

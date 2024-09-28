import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PublicIcon from "@mui/icons-material/Public";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Tooltip from "@mui/material/Tooltip";
import Navbar from './navbar';
import { type } from "@testing-library/user-event/dist/type";

function Home() {
  const [isActive, setIsActive] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 750);
      console.log( isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {isScrolled? <Navbar />:''}
    <div class="blue-layer"></div>
    <div className="container1 d-flex justify-content-center text-center align-items-center row">
    <div className="header col-md-7 col-12  order-md-0 d-flex flex-column justify-content-center text-light">
      <h2>Solving Problems in an Interconnected World</h2>
      <p>Striving to discover and inspire fundamentally new ways to measure, model, predict, and visualize meaningful interactions and interconnectivity of complex dynamical systems</p>
    </div>
     <div className="menu_cont col-md-5 col-12 d-flex justify-content-end  align-items-center order-md-1">
      <div
        className={`menu d-flex justify-content-end align-items-center ${
          isActive ? "active" : ""
        } `}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <Tooltip title={isActive ? "Close features" : "Show features"}>
          <div className="toggle d-flex justify-content-center text-center align-items-center">
            {/* <ShareIcon className="icon" style={{ fontSize: "2.2rem" }} /> */}
            <figure className="d-flex justify-content-center text-center">
              <img src="img/logo4.png" alt="" />
            </figure>
          </div>
        </Tooltip>
        <Tooltip title="Home">
          <li style={{ "--i": 0 }}>
            <NavLink className="a" to="/" >
              <HomeIcon className="icon" style={{ fontSize: "2.5rem" }} />
            </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="Research">
          <li style={{ "--i": 0 }}>
          <NavLink className="a" to="/Research" >
              <WorkspacesIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="Our Lab">
          <li style={{ "--i": 1 }}>
          <NavLink className="a" to="/Lab" >
              <ScienceIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="Highlights" to="/" >
          <li style={{ "--i": 2 }}>
          <NavLink className="a">
              <AutoFixHighIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="Teachers">
          <li style={{ "--i": 3 }}>
          <NavLink className="a" to="/Teaching" >
              <ReduceCapacityIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="Publications">
          <li style={{ "--i": 4 }}>
          <NavLink className="a" to="/Publications" >
              <PublicIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="About Us">
          <li style={{ "--i": 5 }}>
          <NavLink className="a" to="/" >
              <InfoIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
        <Tooltip title="Contacts">
          <li style={{ "--i": 6 }}>
          <NavLink className="a" to="/Contact" >
              <PermContactCalendarIcon className="icon" style={{ fontSize: "2.5rem" }} />
              </NavLink>
          </li>
        </Tooltip>
      </div>
    </div>
    </div>
    {/* <div className="empty"></div> */}
    <div className="homeCont  row">
    <div className="col-md-2 col-12">
        <figure className="d-flex flex-column justify-content-center  text-center py-2">
          <img src="support/logo_IIITR.png" alt="" />
        </figure>
      </div>
      <div className="col-12 col-md-9 mt-2">
        <p >The networks.ai Lab at the Indian Institute of Information Technology Raichur is an interdisciplinary research group dedicated to advancing cutting-edge training and research in Network Science and Artificial Intelligence</p>
        {/* <p >In search of radically novel approaches to quantify, simulate, forecast, and depict significant interplay and interconnectedness among intricate dynamic systems.</p> */}
      </div>
      <div className="col-md-1 col-12">
        <figure className="d-flex justify-content-center py-2">
          <img src="img/lab_logo1.png" alt="" />
        </figure>
      </div>
    </div>

    {/* <div className="research-cont">
      <div className="row">
        <div className="col-md-5 col-12">
          <figure>
            <img src="img/research.png" alt="" />
          </figure>
        </div>
        <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
          <p>We use the techniques and philosophy from computer science, mathematics, and physics to understand real-world complex systems. We contributed to understanding problems in information propagation patterns in complex network dynamics. Our research focuses on Complex Systems, Network Dynamics, Data Science, and Quantum Information. We focus on balancing applied and fundamental research and solving real-world problems by collaborating with academia and Industry.</p>
        </div>
      </div>
    </div> */}
    {/* <div className="research-cont">
      <div className="row">
        <div className="col-md-5 col-12">
          <figure>
            <img src="img/research.png" alt="" />
          </figure>
        </div>
        <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
          <p>We use the techniques and philosophy from computer science, mathematics, and physics to understand real-world complex systems. We contributed to understanding problems in information propagation patterns in complex network dynamics. Our research focuses on Complex Systems, Network Dynamics, Data Science, and Quantum Information. We focus on balancing applied and fundamental research and solving real-world problems by collaborating with academia and Industry.</p>
        </div>
      </div>
    </div> */}
    {/* <div className="research-cont">
      <div className="row">
        <div className="col-md-5 col-12">
          <figure>
            <img src="img/research.png" alt="" />
          </figure>
        </div>
        <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
          <p>We use the techniques and philosophy from computer science, mathematics, and physics to understand real-world complex systems. We contributed to understanding problems in information propagation patterns in complex network dynamics. Our research focuses on Complex Systems, Network Dynamics, Data Science, and Quantum Information. We focus on balancing applied and fundamental research and solving real-world problems by collaborating with academia and Industry.</p>
        </div>
      </div>
    </div> */}
    {/* <div className="research-cont">
      <div className="row">
        <div className="col-md-5 col-12">
          <figure>
            <img src="img/research.png" alt="" />
          </figure>
        </div>
        <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
          <p>We use the techniques and philosophy from computer science, mathematics, and physics to understand real-world complex systems. We contributed to understanding problems in information propagation patterns in complex network dynamics. Our research focuses on Complex Systems, Network Dynamics, Data Science, and Quantum Information. We focus on balancing applied and fundamental research and solving real-world problems by collaborating with academia and Industry.</p>
        </div>
      </div>
    </div> */}

    <div className="homepage-cont">
      <div className="row home-box">
        <div className=" col-12 col-md-8 px-5">
        <h3 className="pb-4">Welcome to the networks.ai Lab</h3>
          <p>
          The main focus of research at the networks.ai Lab is combining network science with AI. Research topics of particular interest to the lab are network dynamics, spectral graph theory, random graphs, information propagation in networks, Graph neural networks, and fundamentals of network dynamics. While research in the lab deals mainly with theoretical aspects of network science, the obtained theoretical results are often applied to real-world network data in a variety of applications ranging from social network to financial network to biological networks. Our Lab also extends research from classical to quantum dynamics. Recent highlights from the research at networks.ai Lab, featuring real-world applications, 
            {/* <br/> */}
          {/* &nbsp;&nbsp;  */}
          {/* <br/> include: */}
<br/>
<ul style={{ listStyleType: "disc" }}>
<br/><li><b>Information Propagation.</b> Research focuses on structural and dynamical properties that localize information in a network environment which was inspired by the Anderson localization (Nobel Prize - 1977) phenomenon of quantum physics. </li>

<br/><li><b>Digital Epidemiology.</b> Digital epidemiology involves using digital data sources and computational methods to study the distribution and determinants of health and disease in populations. It harnesses the wealth of information available through various digital platforms, such as social media, internet searches, wearable devices, and mobile apps, to track and analyse health-related trends.</li>

<br/><li><b>Understanding Complex Systems.</b> AI-driven models can help understand emergent behaviors in complex systems. For example, how individual interactions in a social network lead to collective behaviours.</li>

<br/><li><b>Network Dynamics with AI.</b> AI and network dynamics intersect in various ways, particularly in understanding, modelling, and optimizing complex systems. Network dynamics refers to the study of how elements within a network interact and evolve over time. This could be anything from social networks, transportation systems, to biological interactions within cells.</li>

<br/><li><b>Modelling and Prediction.</b> AI, especially machine learning algorithms, can analyze vast amounts of network data to model and predict how networks evolve. For instance, predicting traffic flow patterns in a city or forecasting the spread of diseases within a population.</li>

<br/><li><b>Optimization.</b> AI helps optimize network performance by dynamically adjusting parameters. In transportation networks, AI can optimize traffic flow, while in social networks, AI algorithms can optimize content delivery or recommendations.</li>

<br/><li><b>Anomaly Detection.</b> AI-powered systems are crucial in identifying anomalies or threats within networks. They can detect unusual patterns in network behavior that might signal a cyberattack, system failure, or other anomalies.</li>
</ul>
More details concerning these and other projects are available in the research pages. The general philosophy motivating several projects in the lab is summarised in this opinion article.

          </p>
        </div>
        {/* <div className="box-cont col-12 col-md-4 p-3">
          <h4>News</h4>
          <p className="py-2">New publication in Physical Review D: Measuring spatial distances in causal sets via causal overlaps <span><b>Read >></b></span></p>
          <p className="py-2">New publication in Physical Review D: Measuring spatial distances in causal sets via causal overlaps <span><b>Read >></b></span></p>
          <p className="py-2">New publication in Physical Review D: Measuring spatial distances in causal sets via causal overlaps <span><b>Read >></b></span></p>
          <p className="py-2">New publication in Physical Review D: Measuring spatial distances in causal sets via causal overlaps <span><b>Read >></b></span></p>
          <p className="py-2">New publication in Physical Review D: Measuring spatial distances in causal sets via causal overlaps <span><b>Read >></b></span></p>           
        </div> */}

                  <div className='collaborators mt-5 col-12 col-md-4 px-5'>
                      <h3 className='text-center'>News</h3> 
                    {/* <ol>
                      <h4>Network Science</h4>
                      <li>Sarika Jalan (IIT Indore)</li>
                      <li>Baruch Barzel (Bar-Ilan University, Israel)</li>
                      <li>Simcha Haber (Bar-Ilan University, Israel)</li>
                      <li>Reuven Cohen (Bar-Ilan University, Israel)</li> 
                      <li>Suman Acharyya (Bar-Ilan University, Israel)</li>
                      <li>Chandrakala Meena (IISER TVM)</li>
                      <li>Richa Tripathi (Washington University, USA)</li>
                    </ol>

                    <ol>
                      <h4>Machine and Deep Learning Algorithms</h4>
                      <li>Amit Reza (Vienna, Austria) </li>
                      <li>Dilip Krishnaswamy (IIT Delhi)</li>
                      <li>Ramin Hasani (MIT, USA)</li>
                      <li>Anirban Dasgupta (IIT Gandhinagar)</li>
                      <li>Radu Grosu (TU Wien, Vienna, Austria)</li>
                      <li>Woo Seok Lee (South Korea)</li>
                      <li>Panthadeep Bhattacharya (NIT Rourkela)</li>
                    </ol>

                    <ol>
                      <h4>Internet of Things (IoT)</h4>
                      <li>Gautam Mahapatra (University of Calcutta)</li>
                      <li>Munesh Singh (IIITDM Jabalpur, India)</li>
                    </ol>
                    
                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody (Bar-Ilan University, Israel)</li>
                      <li>Eli Cohen (Bar-Ilan University, Israel)</li>
                      <li>Dana Ben Porath (Bar-Ilan University, Israel)</li>
                      <li>Gopi Nath Daptary (NIT Rourkela)</li>
                    </ol>

                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol>

                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol> */}

                    {/* <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol>

                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol>

                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol>

                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol> */}

                    {/* <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol>

                    <ol>
                      <h4>Quantum Information </h4>
                      <li>Mahesh N. Jayakody [BIU, Israel]</li>
                      <li>Eli Cohen [BIU, Israel]</li>
                      <li>Dana Ben Porath [BIU, Israel]</li>
                    </ol> */}

                  </div>

      </div>
    </div>

    <div className="support text-center py-2">
      {/* <h1>Support</h1> */}
      <div className="row">
        <ul className="d-flex justify-content-evenly text-center">
          <li className="s1">
            <figure >
              <img  src="support/support1.png" alt="" />
            </figure>
          </li>
          <li className="s2">
            <figure >
              <img  src="support/support2.png" alt="" />
            </figure>
          </li>
          <li className="s3">
            <figure >
              <img  src="support/support3.png" alt="" />
            </figure>
          </li>
          <li className="s4 px-5">
            <figure >
              <img  src="support/support4.png" alt="" />
            </figure>
          </li>
          <li className="s5 px-5">
            <figure >
              <img  src="support/support5.png" alt="" />
            </figure>
          </li>
        </ul>
      </div>
    </div>

    </>
  );
}

export default Home;

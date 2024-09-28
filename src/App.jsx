import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes,Router, useNavigate  } from 'react-router-dom';
// import Project from './Project';
// import sData from './ProjectAPI';
import Home from './Home';
import Publications from './Publication';
import PubData from './PublicationAPI';
import Teaching from './Teaching';
import TeachingData from './TeachingAPI';
import Research from './Research';
import Lab from './Lab';
import { LabMembers, PrevLabMembers } from './LabAPI';
import Contact from './Contact';
import CS302 from './courses/CS302';
import CS303 from './courses/CS303';
import CS333 from './courses/CS333';
import Project from './Project';
import Projects from './ProjectAPI';
import Navbar from './navbar';
import Highlights from './highlight';


function App() {
  const navigate = useNavigate();

  const shouldRenderNavbar = !['/','/CS302','/CS303','/CS333'].includes(window.location.pathname);
  return (
    <>  
       {shouldRenderNavbar && <Navbar />}
       <Routes>
        <Route path='*' element={<Navbar />}/>
         <Route exact path='/' element={<Home />} />
         <Route  path='/Publications' element={<Publications sData={PubData} />} />
         <Route exact path='/Teaching' element={<Teaching sData = {TeachingData}/>} />
         <Route exact path='/Highlights' element={<Highlights/>} />
         <Route  path='/Research' element={<Research />} />
         <Route  path='/Research' element={<Project sData = {Projects} />} />
         <Route exact path='/Lab' element={<Lab sData = {{ LabMembers, PrevLabMembers }}/>} />
         <Route exact path='/Contact' element={<Contact />} />
         <Route exact path='/CS302' element={<CS302 />} />
         <Route exact path='/CS303' element={<CS303 />} />
         <Route exact path='/CS333' element={<CS333 />} />
         <Route element={Error} />
       </Routes>
    </>
  );
}

export default App;

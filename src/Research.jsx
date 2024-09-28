import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Faculty from './Project';
import Faculties from './ProjectAPI';


function Research() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
            <div className='research pt-3'>
               <div className="content mt-5 pt-5">
                {/* <h1 className='text-center py-4'>Research</h1> */}
                <p>We use the techniques and philosophy from computer science, mathematics, and physics to understand real-world complex systems. We contributed to understanding problems in information propagation patterns in complex network dynamics. Our research focuses on Complex Systems, Network Dynamics, Data Science, and Quantum Information. We focus on balancing applied and fundamental research and solving real-world problems by collaborating with academia and Industry.</p>
                <div className="row p-1">
                    {/* <div className="col-md-6 col-12">
                        <figure>
                            <img src="img/research.png" alt="" />
                        </figure>
                    </div> */}
                    <div className="col-md-12 col-12">
                        <figure>
                            <img src="img/gifaroni.gif" alt="" />
                            
                             <a href="https://bigthink.com/starts-with-a-bang/complex-systems-nobel/" target="_blank" rel="noopener noreferrer" >
                             <span className='btn'>
                                <button className='mt-1'>Read more</button>
                                </span>
                             </a>
                            
                        </figure>
                        
                    </div>
                    
                </div>
                <p>Models of a Complex Systems. A series of particles moving along circular paths can appear to create a macroscopic illusion of waves. Similarly, individual water molecules that move in a particular pattern can produce macroscopic water waves, and the gravitational waves we see are likely made out of individual quantum particles that compose them: gravitons.</p>
                {/* <h5 className='pt-1 pb-5'>Credit:&nbsp;&nbsp; <a href="https://bigthink.com/starts-with-a-bang/complex-systems-nobel/">https://bigthink.com/starts-with-a-bang/complex-systems-nobel/</a></h5> */}
            <Faculty sData={Faculties} />
            </div>
            </div>
    </>
  );
}

export default Research;

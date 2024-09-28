import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Lab(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(props)
    const {sData} = props;
    console.log(sData.LabMembers);


  return (
    
    <>

            <div className="group_img text-center align-items-center pt-5">
                  <figure className='d-flex justify-content-center text-center align-items-center my-4'>
                    <img src="img/group.jpg" alt="" />
                  </figure>
            </div>

            <div className='lab'>
            <div className="content">
              <div className="members row" >
                {/* <h1 className='text-center mt-5 pt-5'>Lab Members</h1> */}
                {/* <div className="row my-5">
                <div className="col-md-3 col-12" >
                <div className="img text-center d-flex justify-content-center">
                    <figure className='text-center d-flex justify-content-center'>
                        <img src="img/img.jpg" alt="" />
                    </figure>
                </div>
                </div>
                <div className="col-md-8 col-12">
                    <h4>Dr. Priodyuti Pradhan</h4>
                    <p>​Department of Computer Science and Engineering <br />
                       Indian Institute of Information Technology Raichur <br />
                       Transit in Government Engineering College (GEC), Yermarus Camp <br />
                       Karnataka -584135, India
                    </p>
                </div>    
                </div> */}

                {/* <div className="group_img text-center align-items-center">
                  <figure className='d-flex justify-content-center text-center align-items-center py-4'>
                    <img src="img/group.jpeg" alt="" />
                  </figure>
                </div> */}

                  {
                    sData.LabMembers.map((ele) => {
                        return(
                            <div className="member col-md-2 col-4" key={ele.id}>
                                <div className="img text-center d-flex justify-content-center">
                                    <figure className='text-center d-flex justify-content-center'>
                                        <img src={ele.img} alt="" />
                                    </figure>
                                </div>
                                <div className="cont text-center py-3">
                                    <h6>{ele.name}</h6>
                                    <h7><b>{ele.project}</b></h7><br />
                                    <h7>{ele.time}</h7>
                                </div>                    
                            </div>
                        );
                    })
                  }   
                  <div><br /></div>  
                  {/* {
                    sData.PrevLabMembers.map((ele) => {
                        return(
                            <div className="prevmember col-md-6 col-12" key={ele.id}>
                              <div className="row">
                                <div className="col-md-4 col-4 img text-center d-flex justify-content-center">
                                    <figure className='text-center d-flex justify-content-center'>
                                        <img src={ele.img} alt="" />
                                    </figure>
                                </div>
                                <div className="col-md-8 col-8 cont text-left py-3">
                                    <h5>{ele.name}</h5>
                                    <h6><b>{ele.project}</b></h6>
                                    <h7>{ele.time}</h7>
                                </div>  
                                </div>                  
                            </div>
                        );
                    })
                  }        */}
              </div>

                   {/* <div className="collab"> */}
                  {/* <div className='collaborators mt-5 '>
                      <h3 className='text-center'>Collaborators/ Mentors</h3> 
                    <ol>
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
                    </ol>

                  </div> */}
                  {/* </div> */}
              </div>

                <div className='prevmem row m-4'>
                <h1 className='py-4 px-5'> B.Tech. Alumni</h1>
                  {
                    sData.PrevLabMembers.map((ele) => {
                        return(
                            <div className="prevmember col-md-3 col-6 " key={ele.id}>
                              <div className="row">
                                <div className="col-md-4 col-4 img text-center d-flex justify-content-center">
                                    <figure className='text-center d-flex justify-content-center'>
                                        <img src={ele.img} alt="" />
                                    </figure>
                                </div>
                                <div className="col-md-8 col-8 cont text-left py-3">
                                    <h8>{ele.name}</h8><br />
                                    <h10><b>{ele.project}</b></h10><br />
                                    <h10>{ele.time}</h10>
                                </div>  
                                </div>                  
                            </div>
                        );
                    })
                  } 
                </div>
            </div>
    </>
  );
}

export default Lab;

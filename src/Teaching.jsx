import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Teaching(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

    const {sData} = props;
  return (
    <>
            <div className='teaching'>
            <div className="cont mb-5">
               {/* <h1 className=' mt-1'>Teaching/Educational Activities</h1> */}
               <h2 className='th text-center mt-1 mb-5'>IIIT Raichur</h2>
               {/* <hr className='mb-5' /> */}
               {/* <h1 className='mt-3 mb-5 py-5 text-center year'>2024</h1> */}
               {
                 sData.map((ele) => {
                   return(
                    <>
                    {(ele.id==10)?<hr />:""}
                    <h2 className='th mt-5 mb-5 pt-4 text-center' style={(ele.id==10)?{display : "block"}:{display : "none"}}>UPES</h2>
                    <hr className='mb-3' />
                    <div className="subject p-1 py-0" key={ele.id} >
                        <h4>{ele.name}</h4>
                        <h5 className='mb-3'>{ele.duration}</h5>
                        <span ><NavLink to={ele.link} target="_blank" rel="noopener noreferrer" >Click here </NavLink>&nbsp;for the detais of this course</span>
                        {/* <hr className='mt-4' /> */}
                    </div>
                    </>
                   );
                 })
               }
            
            </div>
            </div>
    </>
  );
}

export default Teaching;

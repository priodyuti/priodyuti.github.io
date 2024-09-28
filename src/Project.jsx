import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Project(props) {
    const {sData} = props;
  return (
    <>
     <h1 className="my-5 text-center">Projects</h1>
      {sData.map((ele,ind) => { 
        return (<div className='Project' key={ele.id}>
         <div className='proj-content p-3 row'>
          <div className={(ind%2!==0)? "proj-img col-12 col-md-6 order-md-1 order-1" : "proj-img col-12 col-md-6 order-md-0 order-1"} >
              <h4 className='py-3'>{ele.name}</h4>
              {/* <a href=""><InstagramIcon /></a>
              <a href=""><FacebookIcon /></a> */}
              <p>{ele.desc}</p>
              <div className="text-center">
                <a href="#" className="btn btn-success">Details</a>
              </div>
          </div>
          <div className={(ind%2!==0)?"proj-img clo-12 col-md-6 order-md-0 d-flex flex-column text-center justify-content-center order-0" : "proj-img clo-12 col-md-6 order-md-1 d-flex flex-column text-center justify-content-center order-0" }>
            <figure>
               <img src={ele.img} alt="Image" />
            </figure>
            <span>{ele.proffesion}</span>
          </div>  
         </div>
         <hr className="hr" />
   </div>);
      })}
    </>
  );
}

export default Project;

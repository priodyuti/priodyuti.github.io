import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function CS303() {
    const [isActive,setIsActive] = useState({
        sec1 : true,
        sec2 : true,
        sec3 : true,
        sec4 : true,
        sec5 : true
    });
  return (
    <>
    <div className='Courses'>
        <div className="cont">
           <h1 className='text-center mt-4'>Deep Learning with Graphs </h1>
           <p className='intro_p'>How does the disease spread nationwide? How can we predict traffic or weather? Answering these questions requires massive amounts of data. Complex data can be represented as a graph of object relationships and interactions. Graph data structures can be ingested by algorithms such as neural networks to perform classification, clustering, and regression tasks.</p>
           <h2 >Objectives</h2>
           <ul className='objective'>
              <li className='mt-1'>Course explores the computational, algorithmic, and modeling challenges of analyzing massive graphs from network science and deep learning perspectives. </li>
              <li>By studying underlying graph structures, we will master machine learning and network science techniques that can improve prediction and reveal insights into massive networks' structural and dynamic properties.</li>
           </ul>
           <h2 className='mt-5'>By the end of this course, students will be able to:</h2>
           <ul className='conclusion'>
               <li className='mt-1'>Distinguish between traditional deep neural networks and deep neural networks with graphs</li>
               <li> Identify opportunities in solving real world problems using Graph neural networks</li>
               <li> Implementation of Graph Neural networks for real-world data sets using PyTorch</li>
           </ul>
                <h2 className='mt-5'>Prerequisites:</h2>
                <p className='prereq_p'>Linear algebra, probability, calculus, differential equations, and Python programming is necessary.</p>
           <h2 className='mt-5'>Syllabus:</h2>
           <div className="syllabus">
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec1: !prevValue.sec1 }))}>{isActive.sec1?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 1 </h3>
                <p style={{ display: isActive.sec1 ? 'block' : 'none' }}>Graph theory, Basic concepts and definitions; Diameter, Path length, Clustering, Centrality metrics; Structure of real networks, Degree distribution, Power-laws, graph visualization tools -- Cytoscape, Gephi, NetworkX, Pyvis </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec2: !prevValue.sec2 }))}>{isActive.sec2?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 2 </h3>
                <p style={{ display: isActive.sec2 ? 'block' : 'none' }}>Models of network formation; The Erdos-Renyi random model, Scale-free model; Clustered models; Models of network growth, Preferential attachment; Small-world networks, community detection, Diffusion, Percolation, epidemic process on networks, dynamical systems</p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec3: !prevValue.sec3 }))}>{isActive.sec3?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 3 </h3>
                <p style={{ display: isActive.sec3 ? 'block' : 'none' }}>Deep Neural Networks basics, Convolution Neural Networks, node embedding, Knowledge Graph Embedding </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec4: !prevValue.sec4 }))}>{isActive.sec4?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 4 </h3>
                <p style={{ display: isActive.sec4 ? 'block' : 'none' }}>Traditional Methods for ML on Graphs, Graph neural networks, applications of graph neural networks, theory of Graph Neural Networks, Difference between deep neural networks and Graph neural networks, Deep Generative Models for Graphs</p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec5: !prevValue.sec5 }))}>{isActive.sec5?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 5 </h3>
                <p style={{ display: isActive.sec5 ? 'block' : 'none' }}>Implementation of Graph Neural networks, Case study on epidemic spreading and stock market time series data sets, tools -- PyTorch, PyG: The ultimate library for Graph Neural Networks. </p>
            </div>    
           <h2 className='mt-5'>References:</h2>
           <ul className='references'>
               <li>[1] &nbsp;&nbsp;<a href="http://networksciencebook.com/"  target="_blank" rel="noopener noreferrer"  >A-L. Barabási, Network Science, Cambridge MA, 2015 </a></li>
               <li>[2] &nbsp;&nbsp;<a href="https://www.cs.mcgill.ca/~wlh/grl_book/files/GRL_Book.pdf"  target="_blank" rel="noopener noreferrer"  > William L. Hamilton, Graph representation learning, Morgan and Claypool Publishers, 2020.</a></li>
               <li>[3] &nbsp;&nbsp;<a href="https://doi.org/10.48550/arXiv.1609.02907"  target="_blank" rel="noopener noreferrer"  >Thomas Kipf, and Max Welling, Semi-supervised classification with graph convolutional networks</a></li>
               <li>[4] &nbsp;&nbsp;<a href="https://muhanzhang.github.io/papers/AAAI_2018_DGCNN.pdf"  target="_blank" rel="noopener noreferrer"  >Muhan Zhang et al., An End-to-End Deep Learning Architecture for Graph Classification</a></li>
               <li>[5] &nbsp;&nbsp;<a href="https://web.stanford.edu/class/cs224w/"  target="_blank" rel="noopener noreferrer"  >CS224W: Machine Learning with Graphs, Stanford University</a></li> 
               <li>[6] &nbsp;&nbsp;<a href="https://gnn.seas.upenn.edu/lectures/"  target="_blank" rel="noopener noreferrer"  >ESE 5140: Graph Neural Networks</a></li>
               <li>[7] &nbsp;&nbsp;<a href="https://pytorch-geometric.readthedocs.io/en/latest/"  target="_blank" rel="noopener noreferrer"  >PyG Documentation</a></li>
           </ul>
        </div>
    </div>  
    </>
  );
}

export default CS303;

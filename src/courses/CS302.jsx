import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function CS302() {
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
           <h1 className='text-center mt-4'>Introduction to Quantum Machine Learning </h1>
           <p className='intro_p'>The pace of development in quantum computing mirrors the rapid advances made in machine learning and artificial intelligence. It is natural to ask whether quantum technologies could boost learning algorithms: this field of inquiry is called quantum-enhanced machine learning. This course aims to show what benefits current and future quantum technologies can provide to machine learning, focusing on algorithms that are challenging with classical digital computers. We strongly emphasize implementing the protocols using open-source frameworks in Qiskit on Real Quantum Computers.</p>
           <h2 >Objectives</h2>
           <ul className='objective'>
              <li className='mt-1'>Understand the notion of quantum states and their evolution in closed/open systems and quantum measurements as a form of sampling. </li>
              <li>Contrast quantum computing paradigms and implementations. Recognize the limitations of current and near-future quantum technologies and the kind of tasks where they outperform or are expected to outperform classical computers. Explain variational circuits.</li>
              <li>Describe and implement classical-quantum hybrid learning algorithms. Encode classical information in quantum systems. Perform discrete optimization in ensembles and unsupervised machine learning with different quantum computing paradigms.</li>
              <li>Summarize quantum Fourier transformation, quantum phase estimation, and quantum matrix, and implement these algorithms using Qiskit </li>
           </ul>
           <h2 className='mt-5'>By the end of this course, students will be able to:</h2>
           <ul className='conclusion'>
               <li className='mt-1'>Distinguish between quantum computing paradigms relevant to machine learning</li>
               <li>Identify opportunities in machine learning for using quantum resources</li>
               <li>Implement learning algorithms on real quantum computers using Qiskit.</li>
           </ul>
                <h2 className='mt-5'>Prerequisites:</h2>
                <p className='prereq_p'>Linear algebra, probability theory, complex numbers, Python, and basic knowledge of machine learning will be advantageous for this course.</p>
           <h2 className='mt-5'>Syllabus:</h2>
           <div className="syllabus">
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec1: !prevValue.sec1 }))}>{isActive.sec1?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 1 </h3>
                <p style={{ display: isActive.sec1 ? 'block' : 'none' }}>Classical Probability, Linear algebra, concepts of Bra-Ket and matrix notations, unitary matrix, Basics of Quantum Mechanics: Axioms of quantum mechanics, Quantum States, Mixed states, Evolution in Closed Quantum Systems, Open Quantum Systems, Tensor products of Hilbert space, Observables, Measurements (Projective Measurements), Dynamics. </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec2: !prevValue.sec2 }))}>{isActive.sec2?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 2 </h3>
                <p style={{ display: isActive.sec2 ? 'block' : 'none' }}>The Qubits, Multiple Qubits (Geometric representation of Qubits-Bloch Sphere), Bipartite quantum systems,  Entanglement, Quantum logic gates and Quantum Circuit diagrams, Quantum Fourior transformation,  Quantum error correction.  Models of quantum computing (Gate-Model, Adiabatic Quantum Computing, Quantum Annealing)</p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec3: !prevValue.sec3 }))}>{isActive.sec3?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 3 </h3>
                <p style={{ display: isActive.sec3 ? 'block' : 'none' }}>Basics of Machine learning, Quantum Fourier transform, Quantum Phase estimation, The HHL Algorithm, Quantum Linear Regression and Classification, Variational quantum circuits for machine learning</p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec4: !prevValue.sec4 }))}>{isActive.sec4?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 4 </h3>
                <p style={{ display: isActive.sec4 ? 'block' : 'none' }}>Qiskit/Pennylane (Optimization purposes), Quantum Walks, Parameterized Quantum Circuit, Quantum neural networks</p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec5: !prevValue.sec5 }))}>{isActive.sec5?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 5 </h3>
                <p style={{ display: isActive.sec5 ? 'block' : 'none' }}>Quantum machine learning projects using Qiskit/Pennylane</p>
            </div>    
           <h2 className='mt-5'>References:</h2>
           <ul className='references'>
               <li>[1] &nbsp;&nbsp;<a href="http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf"  target="_blank" rel="noopener noreferrer"  >Michael A. Nielsen and Isaac L. Chuang, Quantum Computation and Quantum Information</a></li>
               <li>[2] &nbsp;&nbsp;<a href="https://www.lorentz.leidenuniv.nl/quantumcomputers/literature/preskill_1_to_6.pdf"  target="_blank" rel="noopener noreferrer"  >John Preskill Lecture notes</a></li>
               <li>[3] &nbsp;&nbsp;<a href="https://people.eecs.berkeley.edu/~vazirani/f19quantum.html"  target="_blank" rel="noopener noreferrer"  >Umesh Vazirani Lecture notes</a></li>
               <li>[4] &nbsp;&nbsp;<a href="https://learn.qiskit.org/course/machine-learning/parameterized-quantum-circuits"  target="_blank" rel="noopener noreferrer"  >Quantum Computing for Computer Scientists</a></li>
               <li>[5] &nbsp;&nbsp;<a href="https://qiskit.org/textbook/ch-states/introduction.html"  target="_blank" rel="noopener noreferrer"  >IBM Online notes on Qiskit</a></li>
               <li>[6] &nbsp;&nbsp;<a href="https://quantum-computing.ibm.com/"  target="_blank" rel="noopener noreferrer"  >Access IBM Quantum Computer</a></li>
               <li>[7] &nbsp;&nbsp;<a href="https://pennylane.ai/"  target="_blank" rel="noopener noreferrer"  >Quantum Machine Learning using Pennylane</a></li>
           </ul>
        </div>
    </div>  
    </>
  );
}

export default CS302;

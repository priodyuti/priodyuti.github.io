import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function CS333() {
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
           <h1 className='text-center mt-4'>Quantum Computing </h1>
           <p className='intro_p'>This course provides an introduction to the principles of quantum computing, exploring the fundamental concepts of quantum mechanics, quantum algorithms, and the physical realization of quantum computers. Students will learn how quantum computing differs from classical computing, study important quantum algorithms, and understand the current state and future potential of quantum technologies.</p>
           <h2 >Objectives</h2>
           <ul className='objective'>
              <li className='mt-1'>Understand the fundamental principles of quantum mechanics as they apply to quantum computing.
              </li>
              <li> Describe the differences between classical and quantum computing.
              </li>
              <li>Implement basic quantum algorithms using Qiskit.
              </li>
              <li>Understand the physical realization of qubits and quantum gates. </li>
              <li>Analyze the potential and limitations of quantum computing.</li>
           </ul>
           {/* <h2 className='mt-5'>By the end of this course, students will be able to:</h2> */}
           {/* <ul className='conclusion'> */}
               {/* <li className='mt-1'>Distinguish between quantum computing paradigms relevant to machine learning</li> */}
               {/* <li>Identify opportunities in machine learning for using quantum resources</li> */}
               {/* <li>Implement learning algorithms on real quantum computers using Qiskit.</li> */}
           {/* </ul> */}
                <h2 className='mt-5'>Prerequisites:</h2>
                <p className='prereq_p'>Linear Algebra, Basic Probability and Statistics, Design and Analysis of Algorithms, Basic Programming Skills (Python preferred).</p>
           <h2 className='mt-5'>Syllabus:</h2>
           <div className="syllabus">
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec1: !prevValue.sec1 }))}>{isActive.sec1?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 1 </h3>
                <p style={{ display: isActive.sec1 ? 'block' : 'none' }}>Introduction to Quantum Computing, History and motivation for quantum computing, Overview of classical computing vs. quantum computing, Applications and potential impact of quantum computing, Models of quantum computing (Gate Model, Adiabatic Quantum Computing, Quantum Annealing, Topological Quantum Computing), Linear algebra and probability review (vectors, matrices, tensor product, complex numbers, distributions), Bra-ket notation.
                </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec2: !prevValue.sec2 }))}>{isActive.sec2?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 2 </h3>
                <p style={{ display: isActive.sec2 ? 'block' : 'none' }}>Fundamentals of Quantum Mechanics, Quantum states and qubits, Single and Multiple systems, Geometric interpretation (Bloch Sphere), Quantum Superposition and Entanglement, Bell states, No cloning theorem, Observables, Pure states and Mixed states, Density operator, Schrdinger equation, Measurement in quantum mechanics, Quantum Gates and Circuits, Single-qubit gates (Pauli-X, Y, Z, Hadamard, phase gates), Multi-qubit gates (CNOT, Toffoli, SWAP), Quantum circuit diagrams. </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec3: !prevValue.sec3 }))}>{isActive.sec3?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 3 </h3>
                <p style={{ display: isActive.sec3 ? 'block' : 'none' }}>Introduction to quantum programming (Qiskit/Cirq/Q#), Setting up the Environment, Basic Quantum Programs, Writing Quantum Circuits, Simulating Quantum Circuits, Building and running quantum circuits on simulators and real quantum hardware, Debugging Quantum Programs.
                </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec4: !prevValue.sec4 }))}>{isActive.sec4?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 4 </h3>
                <p style={{ display: isActive.sec4 ? 'block' : 'none' }}>Quantum Algorithms: Deutsch’s algorithm, Deutsch-Jozsa algorithm, Simon’s Algorithm, Implementation and analysis, Grover's search algorithm, Fourier Sampling, Quantum Fourier Transform (QFT), Period finding, Shor's algorithm for factoring (optional).
                </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec5: !prevValue.sec5 }))}>{isActive.sec5?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 5 </h3>
                <p style={{ display: isActive.sec5 ? 'block' : 'none' }}>Introduction to quantum noise and errors, physical and logical qubits, Quantum error correction syndrome, Basic error correction codes (Shor code, Steane code, Surface Code), Principles of fault tolerance.
                </p>
                <h3 onClick={() => setIsActive(prevValue => ({ ...prevValue, sec5: !prevValue.sec5 }))}>{isActive.sec5?<KeyboardArrowDownIcon />:< ArrowForwardIosIcon />}&nbsp;&nbsp;Section 5 </h3>
                <p style={{ display: isActive.sec5 ? 'block' : 'none' }}>Physical Realization of Qubits, Overview of qubit technologies: Superconducting qubits, trapped ions, topological qubits, Quantum gate implementation, Quantum computing hardware platforms (IBM Q, Google Sycamore, etc.), Quantum simulation of physical systems, Current State of Quantum Computing, Latest advancements in quantum computing research, Industry and academic developments, Challenges and future directions.
                </p>
            </div>    
           <h2 className='mt-5'>References:</h2>
           <ul className='references'>
               <li>[1] &nbsp;&nbsp;<a href="http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf"  target="_blank" rel="noopener noreferrer"  >Michael A. Nielsen and Isaac L. Chuang, Quantum Computation and Quantum Information</a></li>
               <li>[2] &nbsp;&nbsp;<a href="https://www.lorentz.leidenuniv.nl/quantumcomputers/literature/preskill_1_to_6.pdf"  target="_blank" rel="noopener noreferrer"  >John Preskill Lecture notes</a></li>
               <li>[3] &nbsp;&nbsp;<a href="https://people.eecs.berkeley.edu/~vazirani/f19quantum.html"  target="_blank" rel="noopener noreferrer"  >Umesh Vazirani Lecture notes</a></li>
               <li>[4] &nbsp;&nbsp;<a href="https://learn.qiskit.org/course/machine-learning/parameterized-quantum-circuits"  target="_blank" rel="noopener noreferrer"  >Quantum Machine Learning using Qiskit</a></li>
               <li>[5] &nbsp;&nbsp;<a href="https://qiskit.org/textbook/ch-states/introduction.html"  target="_blank" rel="noopener noreferrer"  >IBM Online notes on Qiskit</a></li>
               <li>[6] &nbsp;&nbsp;<a href="https://quantum-computing.ibm.com/"  target="_blank" rel="noopener noreferrer"  >Access IBM Quantum Computer</a></li>
               <li>[7] &nbsp;&nbsp;<a href="https://pennylane.ai/"  target="_blank" rel="noopener noreferrer"  >Quantum Machine Learning using Pennylane</a></li>
           </ul>
        </div>
    </div>  
    </>
  );
}

export default CS333;

import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FastForwardTwoToneIcon from "@mui/icons-material/FastForwardTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import zIndex from "@mui/material/styles/zIndex";
import PublicationImg from "./PublicationImg";

function Publications(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const { sData } = props;
  console.log(sData);

  const [modals, setModals] = useState(sData.map(() => false));
  return (
    <>
      {" "}
      <div className="pub mt-5">
        {/* <h1>fyu</h1> */}
        <div className="pub1 row mt-5 pt-3">
          {/* <PublicationImg /> */}

          <div className="pub_img col-md-4 col-12 order-0 mt-5 pt-5">
            <div id="carouselExampleInterval" class="carousel slide text-center" data-bs-ride="carousel">
            <div class="carousel-inner ">
                <div class="carousel-item active" data-bs-interval="5000">
                <img src="img/publication/bg/img1.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Georg_Cantor" target="_blank" rel="noopener noreferrer" >Georg Cantor</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="img/publication/bg/img2.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Richard_Feynman" target="_blank" rel="noopener noreferrer" >Richard Feynman</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="img/publication/bg/img3.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Kurt_G%C3%B6del" target="_blank" rel="noopener noreferrer" >Kurt G&ouml;del</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img4.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href=" https://en.wikipedia.org/wiki/Srinivasa_Ramanujan" target="_blank" rel="noopener noreferrer" >Srinivasa Ramanujan</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img5.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Jagadish_Chandra_Bose" target="_blank" rel="noopener noreferrer" >Jagadish Chandra Bose</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img6.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Alan_Turing" target="_blank" rel="noopener noreferrer" >Alan Turing</a>
                </div>
                </div>
                {/* <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img7.jpeg" class="d-block " alt="..." />
                </div> */}
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img8.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Satyendra_Nath_Bose" target="_blank" rel="noopener noreferrer" >Satyendra Nath Bose</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img9.jpeg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href=" https://en.wikipedia.org/wiki/John_von_Neumann" target="_blank" rel="noopener noreferrer" >John von Neumann</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img10.jpg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Albert_Einstein" target="_blank" rel="noopener noreferrer" >Albert Einstein</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img11.jpg" class="d-block " alt="..." />
                <div className="d-flex justify-content-center">
                <a href="https://en.wikipedia.org/wiki/Philip_W._Anderson" target="_blank" rel="noopener noreferrer" >Philip W. Anderson</a>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
          </div>

          <div className="pbs col-md-8 order-1 mt-5">
          {sData.map((ele, index) => {
            return (
              <div key={index}>
                <div className="Publication" key={ele.id}>
                  <div className="pub-content pt-1 row">
                    <div className="col-9 col-md-9 order-md-1 order-1">
                      <h5>{ele.name}</h5>
                      <h6 className="pt-1">{ele.member}</h6>
                      <h6>{ele.det}</h6>
                      <div className="clink m2-4">
                        <span>
                          <button
                            onClick={() =>
                              setModals((prev) =>
                                prev.map((_, i) => (i === index ? true : _))
                              )
                            }
                            style={{ background: "none", border: "none" }}
                          >
                            Abstract
                          </button>
                        </span>
                        <span className="ps-3">
                          <a
                            href={ele.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read
                          </a>
                        </span>
                        <span className="ps-3">
                          <a
                            href={ele.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            arXiv
                          </a>
                        </span>
                        <span className="ps-3">
                          <a
                            href={ele.codes}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Codes
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="co1-3 col-md-3 order-md-0 d-flex flex-column text-center justify-content-center order-0">
                      <figure>
                        <img src={ele.img} alt="Image" />
                      </figure>
                    </div>
                  </div>
                  <hr className="hr" />
                </div>

                <Modal
                  size="lg"
                  isOpen={modals[index]}
                  toggle={() =>
                    setModals((prev) =>
                      prev.map((_, i) => (i === index ? !_ : _))
                    )
                  }
                  className="mt-5 pt-5"
                >
                  <ModalHeader>
                    Abstract
                    <Button
                      onClick={() =>
                        setModals((prev) =>
                          prev.map((_, i) => (i === index ? !_ : _))
                        )
                      }
                      style={{
                        color: "red",
                        background: "none",
                        border: "none",
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      <CloseIcon />
                    </Button>
                  </ModalHeader>
                  <ModalBody>{ele.abstract}</ModalBody>
                </Modal>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Publications;

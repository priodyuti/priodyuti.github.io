import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 



function PublicationImg(props) {
    return(
        <div>
            <h1>Publication Images</h1>
             <div className="pub_img text-center align-items-center">
            <div id="carouselExampleInterval" class="carousel slide text-center" data-bs-ride="carousel">
            <div class="carousel-inner ">
                <div class="carousel-item active" data-bs-interval="1000">
                <img src="img/publication/bg/img1.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="img/publication/bg/img2.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="img/publication/bg/img3.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img4.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img5.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img6.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img7.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img8.jpeg" class="d-block " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <img src="img/publication/bg/img9.jpeg" class="d-block " alt="..." />
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
        </div>
    )
}

export default PublicationImg;

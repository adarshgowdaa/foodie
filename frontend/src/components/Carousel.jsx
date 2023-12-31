import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <div className="carousel-inner" id="carousel">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "5" }}
          >
            <form className="d-flex">
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary rounded-pill"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1080×700/?pizza"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(50%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/180×700/?burger"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(50%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1080×700/?biryani"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(50%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

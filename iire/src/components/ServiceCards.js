import React from "react";

export default function ServiceCards() {
  const images = [
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
  ];
  return (
    <div className="cards-container">
      <div className="colored-background">
        <span>OUR OTHER SERVICES</span>
      </div>
      <div className="cards">
        <a className="service-card" href="/">
          <div className="card-image-container">
            <img className="card-image" src={images[0]} />
          </div>
          <div
            className="card-content"
            style={{ backgroundColor: "rgb(34, 74, 251)" }}
          >
            <span className="service-title">workspace</span>
            <p className="service-description">
              good workspacegood workspacegood workspacegood workspacegood
              workspace
            </p>
            <a className="more-service-button" href="/">
              <button> MORE ={">"} </button>
            </a>
          </div>
        </a>
        <a className="service-card" href="/">
          <div className="card-image-container">
            <img className="card-image" src={images[1]} />
          </div>
          <div
            className="card-content"
            style={{ backgroundColor: "rgb(66, 153, 139)" }}
          >
            <span className="service-title">accommodation </span>
            <p className="service-description">
              good workspacegood workspacegood workspacegood workspacegood
              workspace
            </p>
            <a className="more-service-button" href="/">
              <button> MORE ={">"} </button>
            </a>
          </div>
        </a>
        <a className="service-card" href="/">
          <div className="card-image-container">
            <img className="card-image" src={images[2]} />
          </div>
          <div
            className="card-content"
            style={{ backgroundColor: "rgb(237, 76, 47)" }}
          >
            <span className="service-title">Kitchen</span>
            <p className="service-description">
              good workspacegood workspacegood workspacegood workspacegood
              workspace
            </p>
            <a className="more-service-button" href="/">
              <button> MORE ={">"} </button>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

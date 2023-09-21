import React from "react";

export default function ServiceCards() {
  const images = [
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
    "https://www.stayokay.com/system/offers/image_overviews/000/000/044/normal/Stayokay-Gorssel---TacoVanDerWerf-036_vierkant.jpg?1693573792",
  ];
  return (
    <div className="cards">
      <a className="service-card" href="/">
        <div className="card-image-container">
          <img className="card-image" src={images[0]} />
        </div>
        <div className="card-content">
          <h1 className="service-title">workspace</h1>
          <p>
            good workspacegood workspacegood workspacegood workspacegood
            workspace
          </p>
        </div>
      </a>
      <a className="service-card" href="/">
        <div className="card-image-container">
          <img className="card-image" src={images[1]} />
        </div>
        <div className="card-content">
          <h1 className="service-title">accommodation </h1>
          <p>
            good workspacegood workspacegood workspacegood workspacegood
            workspace
          </p>
        </div>
      </a>
      <a className="service-card" href="/">
        <div className="card-image-container">
          <img className="card-image" src={images[2]} />
        </div>
        <div className="card-content">
          <h1 className="service-title">Kitchen</h1>
          <p>
            good workspacegood workspacegood workspacegood workspacegood
            workspace
          </p>
        </div>
      </a>
    </div>
  );
}

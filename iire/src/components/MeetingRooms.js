import React, { useState } from "react";
import testImage from "../assets/123.jpg";
import testImage2 from "../assets/222.jpeg";

export default function MeetingRoom() {
  const images = [testImage, testImage2, testImage, testImage2];
  const [currentRoom, setCurrentRoom] = useState(0);
  const handleTabClick = (e) => {
    const elementId = parseInt(e.target.id);
    console.log(currentRoom === elementId);
    if (!(currentRoom === elementId)) {
      setCurrentRoom(elementId);
    }
  };
  return (
    <div className="meeting-rooms">
      <div className="meeting-rooms-text">
        <h1>Meeting ROooms</h1>
        <p>
          We provide comfortable, spacious, and well-lit conference rooms for a
          wide range of purposes. Our facilities include digital audio and
          recording equipment and broadband internet suitable for webcasting and
          wifi computers. Our translation booths are equipped with a wireless
          translation system where three languages can be simultaneously
          translated and broadcast.
        </p>
        <p>
          We offer competitive, all-in prices for your style of meeting, whether
          it is a residential conference of several days or a short meeting of
          several hours.
        </p>
        <p>Contact us for a budget which suites your needs.</p>
      </div>
      <div
        className="meeting-rooms-image"
        style={{
          backgroundImage: `url(${images[currentRoom]})`,
        }}
      >
        <div className="room-tabs">
          <div className="tab-buttons">
            <button
              onClick={handleTabClick}
              id={0}
              className={`tab-button ${currentRoom === 0 ? "active" : ""} `}
            >
              Ambon
            </button>
            <button
              onClick={handleTabClick}
              id={1}
              className={`tab-button ${currentRoom === 1 ? "active" : ""} `}
            >
              Flores
            </button>
            <button
              onClick={handleTabClick}
              id={2}
              className={`tab-button ${currentRoom === 2 ? "active" : ""} `}
            >
              Seram
            </button>
          </div>
          <div className="tab-contents">
            <span
              className={`tab-content ${currentRoom === 0 ? "active" : ""} `}
            >
              Our biggest room with a capacity of 90 people. Our medium size
              room. Seats 25 in theatre form, 12 in U shape. Our smallest room
              for private meetings and/or individual working space.
            </span>
            <span
              className={`tab-content ${currentRoom === 1 ? "active" : ""} `}
            >
              Our biggest room with a capacity of 90 people. Our medium size
              room. Seats 25 in theatre form, 12 in U shape. Our smallest room
              for private meetings and/or individual working space.
            </span>
            <span
              className={`tab-content ${currentRoom === 2 ? "active" : ""} `}
            >
              Our biggest room with a capacity of 90 people. Our medium size
              room. Seats 25 in theatre form, 12 in U shape. Our smallest room
              for private meetings and/or individual working space.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

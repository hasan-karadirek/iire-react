import React from "react";
import Slider from "../components/Slider";
import MeetingRoom from "../components/MeetingRooms";
import ServiceCards from "../components/ServiceCards";

export default function HomePage() {
  return (
    <div className="container">
      <Slider />
      <MeetingRoom />
      <ServiceCards />
    </div>
  );
}

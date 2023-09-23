import React from "react";
import Slider from "../components/Slider";
import MeetingRoom from "../components/MeetingRooms";
import ServiceCards from "../components/ServiceCards";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <Slider />
      <MeetingRoom />
      <ServiceCards />
    </div>
  );
}

import React from "react";
import Hero from "../components/Hero";
import EventsFilter from "../components/EventsFilter";
import FeaturedEvents from "../components/FeaturedEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import PastShows from "../components/PastShows";

const Home = () => {
  return (
    <div>
      <Hero />
      <EventsFilter />
      <FeaturedEvents />
      <UpcomingEvents />
    </div>
  );
};

export default Home;


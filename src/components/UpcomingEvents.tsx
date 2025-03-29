import React from "react";
import { MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    date: {
      day: "15",
      month: "June",
      dayOfWeek: "Saturday",
    },
    title: "Indian Gaming Summit",
    category: "Conference",
    venue: " JW Marriott Marquis Hotel",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    date: {
      day: "20",
      month: "June",
      dayOfWeek: "Thursday",
    },
    title: "Valorant Masters",
    category: "Sports",
    venue: "Yas Arena",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">UPCOMING EVENTS</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#242424] transition-colors"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48 md:h-auto relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="text-[#FF0033]">
                      <div className="text-4xl font-bold">{event.date.day}</div>
                      <div>
                        {event.date.month}, {event.date.dayOfWeek}
                      </div>
                    </div>
                    <div>
                      <span className="inline-block bg-[#FF0033] text-white px-3 py-1 rounded-full text-sm mb-2">
                        {event.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>
                          {event.venue} | {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-3 rounded-full border-2 border-[#FF0033] text-[#FF0033] hover:bg-[#FF0033] hover:text-white transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

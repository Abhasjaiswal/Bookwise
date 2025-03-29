import { MapPin, Calendar, Tag } from "lucide-react";

const EventsFilter = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Find Your Next Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full bg-[#1A1A1A] text-white py-3 pl-12 pr-4 rounded-md appearance-none">
              <option>All Categories</option>
              <option>Sports</option>
              <option>Music</option>
              <option>Theater</option>
              <option>Comedy</option>
              <option>Conferences</option>
              <option>Exhibitions</option>
              <option>Educational</option>
            </select>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full bg-[#1A1A1A] text-white py-3 pl-12 pr-4 rounded-md appearance-none">
              <option>All Locations</option>
              <option>Bengaluru</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Gurgaon</option>
              <option>Hyderabad</option>
              <option>Pune</option>
            </select>
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full bg-[#1A1A1A] text-white py-3 pl-12 pr-4 rounded-md appearance-none">
              <option>All Dates</option>
              <option>Today</option>
              <option>This Weekend</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <button className="w-full bg-[#FF0033] text-white px-8 py-3 rounded-md hover:bg-[#cc0029] transition-colors">
            Find Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsFilter;

const events = [
  {
    id: 1,
    title: "UFC 300",
    venue: "Bengaluru Indoor Stadium",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1579447167432-ba8b796e5de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    title: "Indian Food Festival",
    venue: "Jawaharlal Nehru Stadium",
    category: "Food & Drink",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    title: "Global AI Summit",
    venue: " Bangalore International Exhibition Centre",
    category: "Conference",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const FeaturedEvents = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">WHAT'S HAPPENING?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block bg-[#FF0033] text-white px-3 py-1 rounded-full text-sm mb-2">
                  {event.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;

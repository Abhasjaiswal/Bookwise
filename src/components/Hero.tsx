import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Cricket World Cup 2027",
    category: "Sports",
    description:
      "Witness cricketing history! Experience the thrill of the ICC Cricket World Cup live in India. Get your tickets now!",
    image:
      "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?q=80&w=1657&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Mumbai Comedy Festival",
    category: "Comedy",
    description:
      "Get ready for non-stop laughter! India's biggest comedy festival featuring top stand-up comedians from around the world.",
    image:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-samay-raina-live-0-2021-9-26-t-18-11-23.jpg",
  },
  {
    id: 3,
    title: "India Tech Summit 2024",
    category: "Conference",
    description:
      "Join India's biggest tech innovators and entrepreneurs at the premier technology conference. Be a part of the future!",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 4,
    title: "Bollywood Music Fest",
    category: "Music",
    description:
      "Experience electrifying performances by Bollywood's biggest music stars! A night of music, dance, and entertainment in Mumbai.",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="max-w-4xl px-4">
                  <span className="inline-block bg-[#FF0033] text-white px-4 py-1 rounded-full text-sm mb-4">
                    {slide.category}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {slide.description}
                  </p>
                  <button className="bg-[#FF0033] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#cc0029] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

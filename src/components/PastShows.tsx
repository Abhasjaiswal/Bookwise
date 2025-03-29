import React from 'react';
import { Play } from 'lucide-react';

const PastShows = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">EVENT HIGHLIGHTS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Event highlight"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img src="/logo.png" alt="Event Platform" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Global Events Network</h3>
                  <p className="text-sm text-gray-300">Your Gateway to Experiences</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold mb-2">Dubai International Motor Show 2024</h4>
                <p className="text-gray-300">
                  Experience the future of automotive excellence at the Middle East's premier motor show
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Art Dubai Contemporary",
                description: "The region's leading international art fair...",
                image: "https://images.unsplash.com/photo-1577083552431-6e5fd75a9475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                title: "Dubai Marathon 2024",
                description: "Record-breaking performances at the world's richest marathon...",
                image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                title: "Middle East Film Festival",
                description: "Celebrating the best in regional and international cinema...",
                image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#242424] transition-colors">
                <div className="flex items-center p-4">
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <img 
                      src={item.image}
                      alt="Event thumbnail"
                      className="w-full h-full object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <Play className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastShows;
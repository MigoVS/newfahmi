import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, Code2, Sparkles } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div 
      className="group relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-cyan-500/20 shadow-2xl transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
        <div className="relative p-5 z-10 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Project Badge */}
            <div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-600/90 to-blue-600/90 backdrop-blur-xl border border-cyan-400/30">
                <Sparkles className="w-3 h-3 text-cyan-200" />
                <span className="text-xs font-bold text-white">Featured</span>
              </div>
            </div>

            <img
              src={Img}
              alt={Title}
              className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Hover Overlay Icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <div className="p-3 rounded-xl bg-cyan-600/90 backdrop-blur-xl border border-cyan-400/50 shadow-lg hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                <div className="p-3 rounded-xl bg-purple-600/90 backdrop-blur-xl border border-purple-400/50 shadow-lg hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-grow space-y-3">
            <h3 className="text-xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-blue-200 group-hover:to-purple-300 transition-all duration-300">
              {Title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
              {Description}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="pt-5 flex items-center gap-3 mt-auto">
            {ProjectLink ? (
              <a
                href={ProjectLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
                className="group/btn relative flex-1 overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-600 hover:to-blue-600 backdrop-blur-sm border border-cyan-400/30 transition-all duration-300">
                  <ExternalLink className="w-4 h-4 text-white group-hover/btn:rotate-12 transition-transform" />
                  <span className="text-sm font-bold text-white">Live Demo</span>
                </div>
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <span className="text-sm text-gray-500">Demo N/A</span>
              </div>
            )}

            {id ? (
              <a
                href={`/project/${id}`}
                onClick={handleDetails}
                className="group/btn relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 backdrop-blur-sm border border-purple-400/30 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                  <span className="text-sm font-bold text-white">Details</span>
                </div>
              </a>
            ) : (
              <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <span className="text-sm text-gray-500">Details N/A</span>
              </div>
            )}
          </div>
        </div>

        {/* Animated Border on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-border animate-border-flow"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes border-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-border-flow {
          background-size: 200% 200%;
          animation: border-flow 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default CardProject;
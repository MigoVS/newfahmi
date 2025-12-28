import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Zap } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center gap-8 p-8">
        {/* Logo/Icons Animation */}
        <div className="relative flex items-center justify-center gap-6 mb-4">
          <div className="animate-bounce-slow delay-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-cyan-600/80 to-blue-600/80 backdrop-blur-xl border border-cyan-400/50">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="animate-bounce-slow delay-200">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-xl border border-blue-400/50">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="animate-bounce-slow delay-400">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-600/80 to-pink-600/80 backdrop-blur-xl border border-purple-400/50">
                <Zap className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Fahmi Nabeel
            </span>
          </h1>
          <p className="text-gray-400 text-sm tracking-wide">Loading Experience...</p>
        </div>

        {/* Spinner */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative w-16 h-16 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-spin">
            <div className="absolute inset-2 bg-[#030014] rounded-full"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80">
          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <span className="text-gray-500">Loading</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-sm">Please wait</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-0"></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .delay-0 {
          animation-delay: 0ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
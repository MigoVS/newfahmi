import React from 'react';
import { Home, ArrowLeft, Sparkles, Terminal, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Terminal Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-mono text-sm">error://404</span>
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-8xl sm:text-9xl md:text-[12rem] font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl animate-glitch">
                404
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Oops! Page Not Found
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-10">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center border-2 border-cyan-500/30 backdrop-blur-xl">
              <AlertCircle className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="group relative w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative px-6 py-3 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl rounded-lg border-2 border-gray-500/30 group-hover:border-gray-400/50 flex items-center justify-center gap-2 transition-all duration-300">
              <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:-translate-x-1 transition-transform" />
              <span className="text-gray-300 font-bold">Go Back</span>
            </div>
          </button>
          
          <button
            onClick={handleGoHome}
            className="group relative w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Home className="relative z-10 w-5 h-5 text-white" />
              <span className="relative z-10 text-white font-bold">Go Home</span>
            </div>
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 font-mono">
            Error Code: <span className="text-cyan-400">404_NOT_FOUND</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-glitch {
          animation: glitch 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
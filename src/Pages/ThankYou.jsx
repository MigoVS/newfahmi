import React from "react";
import { CheckCircle, Home, Sparkles, Mail, ArrowRight } from "lucide-react";

const ThankYouPage = () => {
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
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-4 border-cyan-400/50 backdrop-blur-xl flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-14 h-14 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Success Decorations */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
          <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
          <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
        </div>

        {/* Thank You Message */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              Thank You!
            </span>
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>
            <p className="relative text-lg sm:text-xl text-gray-300 max-w-md mx-auto leading-relaxed bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
              Your message has been received successfully. I'll get back to you as soon as possible!
            </p>
          </div>
        </div>

        {/* Email Icon Decoration */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30 backdrop-blur-xl">
              <Mail className="w-12 h-12 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <a
            href="/"
            className="group relative inline-block overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Home className="relative z-10 w-5 h-5 text-white" />
              <span className="relative z-10 text-white font-bold text-lg">Back to Home</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <p className="text-sm text-gray-500">
            Or explore my{" "}
            <a href="/#Portofolio" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              portfolio
            </a>
            {" "}while you wait
          </p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-float-delayed"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;
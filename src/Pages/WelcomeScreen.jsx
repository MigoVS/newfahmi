import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, Sparkles, Zap, Terminal } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-cyan-400">_</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
  </div>
);

const IconButton = ({ Icon, delay = 0 }) => (
  <div 
    className="relative group hover:scale-125 transition-all duration-500"
    data-aos="zoom-in"
    data-aos-delay={delay}
  >
    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse" />
    <div className="relative p-4 sm:p-5 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
      <Icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(20px)",
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-5xl mx-auto">
              {/* Top decorative line */}
              <div className="flex justify-center mb-8" data-aos="fade-down">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                  <div className="w-16 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Icons */}
              <motion.div 
                className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-10 sm:mb-12"
                variants={childVariants}
              >
                <IconButton Icon={Terminal} delay={0} />
                <IconButton Icon={Code2} delay={200} />
                <IconButton Icon={Zap} delay={400} />
              </motion.div>

              {/* Welcome Text */}
              <motion.div 
                className="text-center mb-8 sm:mb-10 space-y-6"
                variants={childVariants}
              >
                <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-300 text-sm font-mono">System Online</span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black space-y-4 tracking-tighter">
                  <div className="mb-4">
                    <span 
                      data-aos="fade-right" 
                      data-aos-delay="400" 
                      className="inline-block px-3 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl"
                    >
                      Welcome
                    </span>
                  </div>
                  <div className="mb-4">
                    <span 
                      data-aos="fade-left" 
                      data-aos-delay="600" 
                      className="inline-block px-3 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl"
                    >
                      To
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span 
                        data-aos="zoom-in" 
                        data-aos-delay="800" 
                        className="inline-block px-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
                      >
                        Fahmi
                      </span>
                    </div>
                    <div>
                      <span 
                        data-aos="zoom-in" 
                        data-aos-delay="1000" 
                        className="inline-block px-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl"
                      >
                        Nabeel's
                      </span>
                    </div>
                  </div>
                </h1>
              </motion.div>

              {/* Portfolio Badge */}
              <motion.div 
                className="text-center mb-10"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <div className="inline-block">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                    <div className="relative px-8 py-4 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                        Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Website Link */}
              <motion.div 
                className="text-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <a
                  href="https://www.fahminabeel.com"
                  className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl relative group hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse" />
                  <div className="relative flex items-center gap-3 text-xl sm:text-2xl md:text-3xl">
                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 animate-spin-slow" />
                    <span className="font-mono font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                      <TypewriterEffect text="www.fahminabeel.com" />
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Bottom decorative elements */}
              <div className="flex justify-center gap-3 mt-12" data-aos="fade-up" data-aos-delay="1600">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes float-delayed {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes spin-slow {
              to { transform: rotate(360deg); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
            .animate-float-delayed {
              animation: float-delayed 6s ease-in-out infinite 3s;
            }
            .animate-spin-slow {
              animation: spin-slow 10s linear infinite;
            }
            .delay-100 {
              animation-delay: 0.1s;
            }
            .delay-200 {
              animation-delay: 0.2s;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
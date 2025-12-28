
import React, { useState, useEffect, useCallback, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles, Terminal, Zap } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
      <div className="relative px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl border border-cyan-500/30">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text sm:text-sm text-xs font-semibold flex items-center tracking-wide">
          <Zap className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-cyan-400 animate-pulse" fill="currentColor" />
          AVAILABLE FOR WORK
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-3" data-aos="fade-up" data-aos-delay="600">
    <div className="flex items-center gap-3 mb-2">
      <Terminal className="w-8 h-8 text-cyan-400" />
      <span className="text-cyan-400 font-mono text-sm">./portfolio</span>
    </div>
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none">
      <span className="relative inline-block">
        <span className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-30 animate-pulse"></span>
        <span className="relative bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
          Fahmi
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 blur-3xl opacity-30 animate-pulse"></span>
        <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
          Nabeel
        </span>
      </span>
    </h1>
    <div className="flex items-center gap-2 mt-4">
      <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      <div className="w-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
    </div>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="group relative px-4 py-2.5 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 text-sm font-semibold text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
    <span className="relative z-10">{tech}</span>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon, isPrimary }) => (
  <a href={href}>
    <button className="group relative w-[170px] h-12">
      {isPrimary ? (
        <>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
          <div className="relative h-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-lg flex items-center justify-center gap-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative z-10 text-white font-bold text-sm tracking-wide">{text}</span>
            <Icon className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition-all duration-300"></div>
          <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-lg border-2 border-cyan-500/30 group-hover:border-cyan-400/60 flex items-center justify-center gap-2 transition-all duration-300">
            <span className="text-cyan-300 group-hover:text-cyan-200 font-bold text-sm tracking-wide transition-colors">{text}</span>
            <Icon className="w-4 h-4 text-cyan-300 group-hover:text-cyan-200 group-hover:rotate-45 transition-all duration-300" />
          </div>
        </>
      )}
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3.5">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
      <div className="relative rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-2.5 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      </div>
    </button>
  </a>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Process Engineering Student", "Polypropylene Plant Intern", "National Competition Winner"];
const TECH_STACK = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/FahmiNabeel" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/fahminabeel/" },
  { icon: Instagram, link: "https://www.instagram.com/fahminabeel/" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  const lottieOptions = {
    src: "https://lottie.host/4953c6ff-f8b0-45cd-b667-baf472bba2ae/EHnn08K4mW.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-700 ${
      isHovering 
        ? "scale-[185%] sm:scale-[165%] md:scale-[155%] lg:scale-[150%] rotate-3" 
        : "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%]"
    }`
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] relative" id="Home">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
              data-aos="fade-right"
              data-aos-delay="200">
              <div className="space-y-5 sm:space-y-7">
                <StatusBadge />
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-10 flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                    {text}
                  </span>
                  <span className="w-[3px] h-7 bg-gradient-to-b from-cyan-400 to-purple-500 ml-2 animate-blink"></span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-light border-l-4 border-cyan-500 pl-4 italic"
                  data-aos="fade-up"
                  data-aos-delay="1000">
                  Crafting pixel-perfect experiences with code, creativity, and a passion for innovation. 
                  <span className="text-cyan-400 font-semibold"> Let's build something amazing together.</span>
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-4 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                  <CTAButton href="#Portofolio" text="View Work" icon={ExternalLink} isPrimary={true} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} isPrimary={false} />
                </div>

                {/* Social Links */}
                <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600">
              <div className="relative w-full opacity-90">
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-700 ease-in-out ${
                  isHovering ? "opacity-60 scale-110" : "opacity-30 scale-100"
                }`}>
                </div>

                <div className={`relative lg:left-12 z-10 w-full opacity-90 transform transition-transform duration-700 ${
                  isHovering ? "scale-110 rotate-2" : "scale-100"
                }`}>
                  <DotLottieReact {...lottieOptions} />
                </div>

                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                  isHovering ? "opacity-60" : "opacity-30"
                }`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl animate-pulse-slow transition-all duration-700 ${
                    isHovering ? "scale-120" : "scale-100"
                  }`}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default memo(Home);
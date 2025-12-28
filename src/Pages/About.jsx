import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, Rocket, Zap } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = memo(() => (
  <div className="text-center lg:mb-12 mb-6 px-[5%]">
    <div className="inline-block relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
      <h2 
        className="relative text-4xl md:text-6xl font-black tracking-tight" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Fahmi
        </span>
      </h2>
    </div>
    <p 
      className="mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-3"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Rocket className="w-5 h-5 text-cyan-400 animate-bounce" />
      <span className="font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
        Transforming Ideas Into Digital Reality
      </span>
      <Zap className="w-5 h-5 text-purple-400 animate-pulse" fill="currentColor" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Enhanced gradient backgrounds */}
      <div className="absolute -inset-8 opacity-30 z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-3xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-3xl animate-pulse-slow opacity-60" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.4)] transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
          <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-3xl z-20 transition-all duration-700 group-hover:border-purple-400/50 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-purple-500/30 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-cyan-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          
          <img
            src="/Photo.jpg"
            alt="Fahmi Nabeel"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Enhanced hover effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-transparent to-cyan-500/20 transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group h-full">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
    <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40 h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="w-8 h-8 text-cyan-300" />
        </div>
        <span 
          className="text-5xl font-black bg-gradient-to-br from-cyan-300 to-purple-400 bg-clip-text text-transparent"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          {value}
        </span>
      </div>

      <div>
        <p 
          className="text-sm uppercase tracking-wider text-cyan-300 font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p 
            className="text-xs text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2020-01-01");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-cyan-500 to-blue-600",
      value: totalProjects,
      label: "Total Projects",
      description: "Innovative solutions delivered",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-blue-500 to-purple-600",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional achievements",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-purple-500 to-pink-600",
      value: YearExperience,
      label: "Years Experience",
      description: "Continuous growth journey",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0 relative" 
      id="About"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                Hi, I'm
              </span>
              <span 
                className="block mt-3 text-white drop-shadow-lg"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Fahmi Nabeel
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-justify border-l-4 border-cyan-500 pl-4 backdrop-blur-sm bg-white/5 p-4 rounded-r-xl"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Petrochemical Engineering student at <span className="text-cyan-400 font-bold">Politeknik Industri Petrokimia Banten</span>. Currently gaining hands-on experience as an intern at a <span className="text-purple-400 font-bold">Polypropylene Plant</span> utilizing Spheripol technology. During my internship, I focus on understanding Polymer characteristics and operating Extruder machinery. I am also developing technical proficiency in reading P&IDs, and understanding Process Control loops. Beyond technical operations, I have demonstrated a strong competitive spirit and excellence as a <span className="text-blue-400 font-bold">National Winner</span> in the FLMPI BPSDMI competition. I am eager to apply my skills and continue learning in the petrochemical industry.
            </p>

            {/* Quote Section */}
            <div 
              className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 border-2 border-cyan-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden group"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <div className="absolute top-3 right-3 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="absolute top-4 left-4 text-cyan-400/40 group-hover:text-cyan-400/60 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-gray-200 text-center lg:text-left font-semibold text-base pl-8">
                "Innovation distinguishes between a leader and a follower."
                <span className="block mt-2 text-sm text-cyan-400 font-normal">- Steve Jobs</span>
              </blockquote>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full pt-4">
              <a href="https://drive.google.com/drive/folders/1BOm51Grsabb3zj6Xk27K-iRwI1zITcpo" className="w-full lg:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="group relative w-full lg:w-auto overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                  <div className="relative px-8 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-lg text-white font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <FileText className="w-5 h-5" />
                    <span>Download CV</span>
                  </div>
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto px-8 py-3 rounded-lg border-2 border-cyan-500/50 text-cyan-300 font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm bg-white/5"
                >
                  <Code className="w-5 h-5" />
                  <span>View Projects</span>
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);

import React, { useEffect, useState, useCallback, useMemo } from "react";

// Mock Supabase client untuk demo
const supabase = {
  from: (table) => ({
    select: () => ({
      order: () => 
        Promise.resolve({
          data: table === "projects" ? [
            { id: 1, Img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop", Title: "E-Commerce Platform", Description: "Full-stack e-commerce solution with React and Node.js featuring real-time inventory management", Link: "https://example.com" },
            { id: 2, Img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop", Title: "Task Management App", Description: "Collaborative task manager with real-time updates and team collaboration features", Link: "https://example.com" },
            { id: 3, Img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop", Title: "Portfolio Website", Description: "Modern portfolio with smooth animations and interactive design elements", Link: "https://example.com" },
            { id: 4, Img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop", Title: "Weather Dashboard", Description: "Real-time weather tracking application with detailed forecasts and maps", Link: "https://example.com" },
            { id: 5, Img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop", Title: "Chat Application", Description: "Real-time messaging platform with group chats and media sharing", Link: "https://example.com" },
            { id: 6, Img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop", Title: "Blog Platform", Description: "Content management system with markdown support and SEO optimization", Link: "https://example.com" },
            { id: 7, Img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&h=250&fit=crop", Title: "Social Media Dashboard", Description: "Analytics dashboard for tracking social media performance across platforms", Link: "https://example.com" },
          ] : [
            { id: 1, Img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=350&h=250&fit=crop" },
            { id: 2, Img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=350&h=250&fit=crop" },
            { id: 3, Img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=350&h=250&fit=crop" },
            { id: 4, Img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=350&h=250&fit=crop" },
            { id: 5, Img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=350&h=250&fit=crop" },
            { id: 6, Img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=350&h=250&fit=crop" },
            { id: 7, Img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=350&h=250&fit=crop" },
          ],
          error: null
        })
    })
  })
};

const techStacks = [
  { icon: "html", language: "HTML", color: "from-orange-500 to-red-500" },
  { icon: "css", language: "CSS", color: "from-blue-500 to-cyan-500" },
  { icon: "js", language: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { icon: "tw", language: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
  { icon: "react", language: "ReactJS", color: "from-cyan-300 to-blue-400" },
  { icon: "vite", language: "Vite", color: "from-purple-500 to-yellow-400" },
  { icon: "node", language: "Node JS", color: "from-green-500 to-emerald-600" },
  { icon: "bs", language: "Bootstrap", color: "from-purple-600 to-indigo-600" },
  { icon: "fb", language: "Firebase", color: "from-yellow-500 to-orange-500" },
  { icon: "mui", language: "Material UI", color: "from-blue-600 to-indigo-600" },
  { icon: "vc", language: "Vercel", color: "from-gray-800 to-black" },
  { icon: "sa", language: "SweetAlert2", color: "from-pink-500 to-purple-500" },
];

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [projectsResponse, certificatesResponse] = await Promise.all([
        supabase.from("projects").select("*").order('id', { ascending: true }),
        supabase.from("certificates").select("*").order('id', { ascending: true }),
      ]);

      setProjects(projectsResponse.data || []);
      setCertificates(certificatesResponse.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) return projects;
    const search = searchTerm.toLowerCase();
    return projects.filter(project => 
      project.Title.toLowerCase().includes(search) ||
      project.Description.toLowerCase().includes(search)
    );
  }, [projects, searchTerm]);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  const projectStats = useMemo(() => ({
    total: projects.length,
    certificates: certificates.length,
    techStack: techStacks.length
  }), [projects.length, certificates.length]);

  const tabs = [
    { id: 0, label: "Projects", icon: "code" },
    { id: 1, label: "Certificates", icon: "award" },
    { id: 2, label: "Tech Stack", icon: "boxes" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#030014] via-[#0a0a1f] to-[#030014] py-12 md:py-20 px-4 sm:px-6 md:px-[10%]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Explore my journey through projects, certifications, and technical expertise. 
            Each section represents a milestone in my continuous learning path.
          </p>
          
          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12">
            {[
              { value: projectStats.total, label: "Projects", gradient: "from-blue-500 to-cyan-500" },
              { value: projectStats.certificates, label: "Certificates", gradient: "from-purple-500 to-pink-500" },
              { value: projectStats.techStack, label: "Technologies", gradient: "from-orange-500 to-red-500" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="relative group"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500" 
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 min-w-[140px] md:min-w-[180px] hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Tabs Navigation */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-2 shadow-2xl">
            <div className="grid grid-cols-3 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setValue(tab.id);
                    setSearchTerm("");
                  }}
                  className={`relative px-4 py-4 md:py-6 rounded-xl md:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                    value === tab.id
                      ? 'text-white shadow-lg'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {value === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90 rounded-xl md:rounded-2xl"></div>
                  )}
                  <div className="relative flex flex-col items-center gap-2">
                    <div className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${value === tab.id ? 'scale-110' : ''}`}>
                      {tab.icon === "code" && (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {tab.icon === "award" && (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      )}
                      {tab.icon === "boxes" && (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      )}
                    </div>
                    <span className="hidden sm:block">{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {value === 0 && (
          <div className="mb-8 max-w-2xl mx-auto" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-4 pl-14 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base"
                />
                <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="relative">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
              </div>
              <p className="text-slate-400 text-sm md:text-base">Loading amazing content...</p>
            </div>
          ) : (
            <>
              {/* Projects Tab */}
              {value === 0 && (
                <div className="space-y-8">
                  {displayedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                      {displayedProjects.map((project, idx) => (
                        <div
                          key={project.id}
                          className="group relative"
                          style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-blue-600/20 group-hover:to-purple-600/20 rounded-3xl blur-2xl transition-all duration-500"></div>
                          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                            <div className="relative h-56 overflow-hidden">
                              <img 
                                src={project.Img} 
                                alt={project.Title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                  e.target.src = `https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=250&fit=crop`;
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-6 md:p-8">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                {project.Title}
                              </h3>
                              <p className="text-slate-400 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                                {project.Description}
                              </p>
                              <a
                                href={project.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm md:text-base group/link transition-all duration-300"
                              >
                                View Project
                                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-32">
                      <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-slate-900/50 rounded-full border border-white/10">
                        <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-400 text-lg mb-2">No projects found</p>
                      <p className="text-slate-500 text-sm">Try adjusting your search terms</p>
                    </div>
                  )}
                  
                  {filteredProjects.length > initialItems && (
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          {showAllProjects ? "Show Less" : `Show All ${filteredProjects.length} Projects`}
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Certificates Tab */}
              {value === 1 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {displayedCertificates.map((cert, idx) => (
                      <div
                        key={cert.id}
                        className="group relative"
                        style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 rounded-3xl blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                          <div className="relative overflow-hidden">
                            <img
                              src={cert.Img}
                              alt="Certificate"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              onError={(e) => {
                                e.target.src = `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=350&h=250&fit=crop`;
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {certificates.length > initialItems && (
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={() => setShowAllCertificates(!showAllCertificates)}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          {showAllCertificates ? "Show Less" : `Show All ${certificates.length} Certificates`}
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${showAllCertificates ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack Tab */}
              {value === 2 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                  {techStacks.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative"
                      style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.05}s both` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}></div>
                      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative w-16 h-16 md:w-20 md:h-20">
                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                            <div className="relative w-full h-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
                              {tech.icon.toUpperCase()}
                            </div>
                          </div>
                          <span className="text-slate-300 group-hover:text-white text-sm md:text-base font-semibold text-center transition-colors duration-300">
                            {tech.language}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
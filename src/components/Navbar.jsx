import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Portofolio", label: "Portfolio" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isOpen
                    ? "bg-[#030014]"
                    : scrolled
                    ? "bg-[#030014]/80 backdrop-blur-2xl border-b border-cyan-500/10"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 group">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className="relative inline-block"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>
                            <div className="relative flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-2xl font-black tracking-tight">
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                        Fahmi
                                    </span>
                                </span>
                            </div>
                        </a>
                    </div>
        
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="group relative px-5 py-2.5"
                                >
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30"
                                            : "bg-transparent border border-transparent group-hover:bg-white/5 group-hover:border-cyan-500/20"
                                    }`}></div>
                                    <span
                                        className={`relative z-10 text-sm font-semibold tracking-wide transition-all duration-300 ${
                                            activeSection === item.href.substring(1)
                                                ? "bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
                                                : "text-gray-300 group-hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
        
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-2.5 rounded-xl bg-white/5 border border-cyan-500/20 hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                                    <Menu className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                                    <X className="w-6 h-6 text-cyan-400" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        
            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-6 py-8 space-y-3 bg-gradient-to-b from-[#030014] to-[#030014]/95 backdrop-blur-xl border-t border-cyan-500/10">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`group relative block px-5 py-4 rounded-xl transition-all duration-300 ${
                                activeSection === item.href.substring(1)
                                    ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30"
                                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30"
                            }`}
                            style={{
                                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <span
                                    className={`text-lg font-semibold transition-colors duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
                                            : "text-gray-300 group-hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-100"
                                        : "bg-gray-600 scale-0 group-hover:scale-100"
                                }`}></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
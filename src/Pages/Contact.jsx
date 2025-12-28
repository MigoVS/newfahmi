import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Sparkles, MapPin, Phone } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Pesan berhasil terkirim! Terima kasih telah menghubungi kami.');
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative text-center lg:mt-[5%] mt-10 mb-8 sm:px-0 px-[5%]">
        <div className="inline-block">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-xl opacity-30"></div>
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="relative text-3xl md:text-6xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mt-4"
        >
          Punya pertanyaan atau ingin berkolaborasi? Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!
        </p>
      </div>

      <div className="relative h-auto py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%] md:px-0" id="Contact">
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12">
          {/* Contact Form */}
          <div className="relative group" data-aos="fade-right" data-aos-duration="1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Send Message
                  </h2>
                  <p className="text-gray-300">
                    Kirimkan pesan Anda dan saya akan membalas secepat mungkin.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <Send className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <div className="space-y-6">
                <div data-aos="fade-up" data-aos-delay="100" className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative flex items-center">
                    <User className="absolute left-4 w-5 h-5 text-cyan-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-4 pl-12 bg-white/5 rounded-xl border-2 border-cyan-500/20 placeholder-gray-500 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 hover:border-cyan-500/40 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 w-5 h-5 text-blue-400 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-4 pl-12 bg-white/5 rounded-xl border-2 border-blue-500/20 placeholder-gray-500 text-white focus:outline-none focus:border-blue-400 transition-all duration-300 hover:border-blue-500/40 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300" className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative flex items-start">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-purple-400 transition-colors" />
                    <textarea
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full resize-none p-4 pl-12 bg-white/5 rounded-xl border-2 border-purple-500/20 placeholder-gray-500 text-white focus:outline-none focus:border-purple-400 transition-all duration-300 hover:border-purple-500/40 h-[9.9rem] disabled:opacity-50"
                    />
                  </div>
                </div>

                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  <div className="relative h-14 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-xl flex items-center justify-center gap-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="relative z-10 text-white font-bold tracking-wide">Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Send className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                        <span className="relative z-10 text-white font-bold tracking-wide">Kirim Pesan</span>
                      </>
                    )}
                  </div>
                </button>
              </div>

              <div className="mt-10 pt-6 border-t border-cyan-500/20">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <Komentar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
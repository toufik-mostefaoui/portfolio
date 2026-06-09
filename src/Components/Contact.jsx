import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "t.mostefaoui@esi-sba.dz",
      href: "mailto:t.mostefaoui@esi-sba.dz",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "05-42-45-66-27 | 05-53-24-68-76",
      href: "tel:0542456627",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tiaret, Algeria",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", color: "from-gray-600 to-gray-800", url: "https://github.com/toufik-mostefaoui" },
    { icon: FaLinkedin, label: "LinkedIn", color: "from-blue-600 to-blue-800", url: "https://www.linkedin.com/in/mostefaoui-toufik-812947314" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    // Get all credentials from .env
   const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Check credentials
    if (!SERVICE_ID || !PUBLIC_KEY || !TEMPLATE_ID) {
      setStatus({ 
        type: "error", 
        message: "❌ Email service not configured. Please check .env file." 
      });
      setIsSending(false);
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setStatus({ 
          type: "success", 
          message: "✅ Message sent successfully! I'll get back to you soon." 
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Email send error:", error);
      setStatus({ 
        type: "error", 
        message: "❌ Failed to send message. Please try again or contact me directly via email." 
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              delay: i * 2,
              repeat: Infinity,
            }}
            className={`absolute w-96 h-96 rounded-full border-2 ${
              i % 2 === 0 ? "border-cyan-500/20" : "border-purple-500/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid - 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300`} />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.icon === Globe ? "_blank" : undefined}
                          rel={item.icon === Globe ? "noopener noreferrer" : undefined}
                          className="text-white font-medium hover:text-cyan-400 transition-colors text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-16">
          <h4 className="text-xl font-bold text-white mb-6">Connect With Me</h4>
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group cursor-pointer`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full blur-lg opacity-0 group-hover:opacity-75 transition duration-300`} />
                  <Icon className="relative w-7 h-7 text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Contact Form - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group max-w-3xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Send a Message</h3>
            
            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  status.type === "success" 
                    ? "bg-green-500/20 border border-green-500/50 text-green-400" 
                    : "bg-red-500/20 border border-red-500/50 text-red-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-600 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-600 transition-colors"
                  placeholder="email@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-600 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-gray-500"
        >
          <p className="text-lg">
            © 2026 Mostefaoui toufik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
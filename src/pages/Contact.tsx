import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/[username]",
      icon: FaGithub,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/[username]",
      icon: FaLinkedin,
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/[your-number]",
      icon: FaWhatsapp,
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-tertiary p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <a href="mailto:[email]" className="hover:text-secondary">
                  [email@example.com]
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <span>[phone number]</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-tertiary p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Social Media</h2>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-secondary transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <link.icon />
                  <span>{link.platform}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
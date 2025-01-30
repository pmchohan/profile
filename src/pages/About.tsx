import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: "Bachelor's in Artificial Intelligence",
      institution: "UMT, Lahore",
      year: "2021-present",
    },
    {
      degree: "ICS - Phy,Math",
      institution: "PGC, Gujranwala",
      year: "2019-2021",
    },
  ];

  const experience = [
    {
      role: "Mentor",
      company: "GDGoC UMT",
      duration: "--",
      description: "Taught basics of ML classification with live implementation",
    },
  ];

  const achievements = [
    {
      title: "Dean's Award",
      event: "for scoring SGPA 3.81 in 1st semester",
      description: "Universities second highest award for academic excellence",
    },
    {
      title: "Dean's Award",
      event: "for scoring SGPA 3.93 in 2nd semester",
      description: "Universities second highest award for academic excellence",
    },
    {
      title: "Gold Medal",
      event: "for scoring 1007/1100 - highest in Computer Science batch in matric",
      description: "READ Foundation's highest award for academic excellence",
    },
  ];

  const societies = [
    {
      role: "General Secretary",
      name: "Leaders Forum UMT",
      duration: "Sep 24 - present",
      description: "",
    },
    {
      role: "AI/ML Lead",
      name: "Google Developer's Group UMT",
      duration: "Sep 24 - present",
      description: "",
    },
    {
      role: "Pre-Impactor",
      name: "Idyllic Youth Society",
      duration: "Oct 24 - present",
      description: "",
    },
    {
      role: "President SDT Block",
      name: "Leaders Forum UMT",
      duration: "Jan 24 - Oct 24",
      description: "",
    },
    {
      role: "Member Planning Committee",
      name: "Leaders Forum UMT",
      duration: "Dec 23 - Jan 24",
      description: "",
    },
    {
      role: "Member AI/ML team",
      name: "Google Developer's Group UMT",
      duration: "Nov 23 - Oct 24",
      description: "",
    },
    {
      role: "Associate",
      name: "Idyllic Youth Society",
      duration: "Jan 24 - Oct 24",
      description: "",
    },
    {
      role: "Volunteer",
      name: "Idyllic Youth Society",
      duration: "Oct 23 - Jan 24",
      description: "",
    },
  ];

  const certifications = [
    {
      name: "Crash Course on Python",
      issuer: "Coursera - Google",
      year: "2023",
    },
    {
      name: "Introduction to Docker",
      issuer: "Coursera - Google Cloud",
      year: "2023",
    },
    {
      name: "MS Word Specialist",
      issuer: "PGC - Microsoft",
      year: "2021",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/profile/images/me.jpg"
              alt="Abdullah Faisal"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-400 text-lg">
              I'm a tech enthusiast based in Lahore, passionate about developing intelligent systems
              that can make a positive impact on society.
            </p>
          </div>
        </motion.div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-secondary">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-500">{exp.duration}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-secondary">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.event}</p>
                <p className="text-gray-400 mt-2">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Leadership & Involvement</h2>
          <div className="space-y-6">
            {societies.map((society, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-secondary">{society.name}</h3>
                <p className="text-gray-400">{society.role}</p>
                <p className="text-gray-500">{society.duration}</p>
                <p className="text-gray-400 mt-2">{society.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-secondary">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-tertiary p-6 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-secondary">Machine Learning</div>
              <div className="text-secondary">Deep Learning</div>
              <div className="text-secondary">Python</div>
              <div className="text-secondary">TensorFlow</div>
              <div className="text-secondary">PyTorch</div>
              <div className="text-secondary">Computer Vision</div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
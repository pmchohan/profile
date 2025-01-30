import { motion } from 'framer-motion';

const Home = () => {
  const projects = [
    {
      title: "AI Project 1",
      description: "Description of your first AI project",
      link: "#",
    },
    {
      title: "Machine Learning Project",
      description: "Description of your ML project",
      link: "#",
    },
  ];

  const blogs = [
    {
      title: "Understanding Neural Networks",
      description: "A deep dive into neural networks",
      link: "#",
    },
    {
      title: "The Future of AI",
      description: "Exploring upcoming AI trends",
      link: "#",
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
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center justify-between mb-20 gap-8"
        >
          <div className="text-center md:text-left md:w-2/3">
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-secondary">Abdullah Faisal</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Artificial Intelligence Student | Problem Solver | Tech Enthusiast
            </motion.p>
          </div>
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://placehold.co/400x400/1a1a1a/64ffda/png?text=AF"
              alt="Abdullah Faisal"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-secondary hover:underline inline-flex items-center">
                  Learn more 
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.description}</p>
                <a href={blog.link} className="text-secondary hover:underline inline-flex items-center">
                  Read more
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
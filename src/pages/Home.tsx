import { motion } from 'framer-motion';

const Home = () => {
  const projects = [
    {
      title: "Stella",
      description: "no LLM chatbot - Django, Web Scrapping, NLP, Neo4j, AIML, Prolog",
      link: "https://github.com/pmchohan/stella",
    },
    {
      title: "Wall-E",
      description: "Voice Controlled Robot through bluetooth - Arduino Uno",
      link: "#",
    },
    {
      title: "Web-Wizard",
      description: "NLP project to scrape provided links and respond accordingly - Gemini, Langchain, FAISS",
      link: "https://github.com/pmchohan/Web-Wizard",
    },
    {
      title: "Intelli Shelf",
      description: "Library book borrowing system with chat support (hardware) - ESP32, RFID, LLAMA3 (groq)",
      link: "https://github.com/pmchohan/IntelliShelf",
    },
    {
      title: "Cinema Ticketing System",
      description: "OOP semester project - C++, File Handling, membership, admin-panel",
      link: "#",
    },
    {
      title: "Sudoku",
      description: "C++ programming fundamentals project (single game)",
      link: "#",
    },
  ];

  const blogs = [
    {
      title: "Unlocking Insights: Your Introduction to Data Mining",
      description: "Basics of Data Mining and its applications",
      link: "https://medium.com/@abdullahchohan9919/unlocking-insights-your-introduction-to-data-mining-dad7ac68765a",
    },
    {
      title: "Refresher Course: Essential Statistics and DBMS for Data Mining Success",
      description: "Revising the basics of Statistics and Database Management Systems",
      link: "https://medium.com/@abdullahchohan9919/refresher-course-essential-statistics-and-dbms-for-data-mining-success-379bc185fadc",
    },
    {
      title: "Data Preprocessing: A Crucial Step for Successful Data Mining",
      description: "Importance of Data Preprocessing in Data Mining",
      link: "https://medium.com/@abdullahchohan9919/poor-data-quality-can-lead-to-up-to-70-of-data-mining-projects-failing-daeb04658d91",
    },
    {
      title: "Data Warehousing and Online Analytical Processing",
      description: "Unleashing the power of Data Mining",
      link: "https://medium.com/@abdullahchohan9919/data-warehousing-and-online-analytical-processing-unleashing-the-power-of-data-mining-849c53c90099",
    },
    {
      title: "Mastering Data Cube Technology for Efficient Data Mining",
      description: "Understanding the concept of Data Cubes",
      link: "https://medium.com/@abdullahchohan9919/the-explosion-of-data-is-reshaping-how-businesses-and-researchers-operate-41d1d24c41cb",
    },
    {
      title: "Mastering Frequent Pattern Analysis with Association Rule Mining",
      description: "Uncover hidden relationships in your data",
      link: "https://medium.com/@abdullahchohan9919/uncover-hidden-relationships-mastering-frequent-pattern-analysis-with-association-rule-mining-6edd0bdb6ce5",
    },
    {
      title: "Machine Learning Classification: A Data Mining Deep Dive",
      description: "Understanding the basics of Machine Learning Classification",
      link: "https://medium.com/@abdullahchohan9919/machine-learning-classification-a-data-mining-deep-dive-9e3397101a0d",
    },
    {
      title: "Power of Cluster Analysis: An Intuitive Mathematical",
      description: "Understanding the concept of Cluster Analysis",
      link: "https://medium.com/@abdullahchohan9919/cluster-analysis-serves-as-a-powerful-tool-in-the-realm-of-data-mining-38249961d54c",
    },
    {
      title: "Outlier Detection: A Data Mining Essential",
      description: "Understanding the concept of Outlier Detection",
      link: "https://medium.com/@abdullahchohan9919/outlier-detection-a-data-mining-essential-1e3fd3bbcb06",
    },
    {
      title: "Master the Weka Data Mining Workbench",
      description: "A Comprehensive Guide",
      link: "https://medium.com/@abdullahchohan9919/master-the-weka-data-mining-workbench-a-comprehensive-guide-6a12a3d6eae7",
    }
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
              AI Student | Student Activist | Tech Enthusiast
            </motion.p>
          </div>
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
                <motion.a
                  key={index}
                  target="_blank"
                  href={project.link}
                  className="text-secondary hover:underline inline-flex items-center"
                >
                  Learn more 
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
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
                <motion.a key={index} target="_blank" href={blog.link} className="text-secondary hover:underline inline-flex items-center">
                  Read more
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
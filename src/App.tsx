import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Instagram, Send, Bitcoin, Feather as Ethereum, Code2, Brain, Database, Shield, ExternalLink } from 'lucide-react';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const projects = [
    {
      title: "DeFi Protocol",
      description: "Developed a decentralized finance protocol with smart contracts",
      tech: ["Solidity", "Web3.js", "React"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "NFT Marketplace",
      description: "Built a marketplace for trading digital collectibles",
      tech: ["ERC-721", "IPFS", "Next.js"],
      icon: <Bitcoin className="w-6 h-6" />,
    },
    {
      title: "Smart Contract Security",
      description: "Implemented security audits and optimizations",
      tech: ["Hardhat", "Slither", "Mythril"],
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const skills = [
    "Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DeFi",
    "NFTs", "IPFS", "Hardhat", "Truffle", "OpenZeppelin"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="flex flex-col items-center text-center">
          <motion.img
            src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-8 border-4 border-blue-500"
            whileHover={{ scale: 1.1 }}
          />
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Ansh
          </motion.h1>
          <motion.h2 className="text-2xl mb-6 text-gray-300">Blockchain Developer & Smart Contract Engineer</motion.h2>
          
          <div className="flex space-x-6 mb-8">
            <motion.a
              href="https://github.com/anshu908"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-blue-500"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com/anshopi__"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-pink-500"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://t.me/cyber_ansh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-blue-400"
            >
              <Send className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 py-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-bold ml-2">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 text-center"
        >
          Let's Connect
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="max-w-md mx-auto bg-gray-800 rounded-lg p-8"
        >
          <p className="text-center mb-6">
            Interested in blockchain development or have a project in mind? Let's discuss how we can work together!
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://t.me/cyber_ansh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Message on Telegram</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
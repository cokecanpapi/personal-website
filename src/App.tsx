import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Brain, Database, ChartBar, Code, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Customer Segmentation',
    description: 'Developed a machine learning model to segment customers for targeted marketing campaigns.',
    image: 'https://source.unsplash.com/random/800x600?artificial-intelligence',
    link: '#',
  },
  {
    title: 'Predictive Maintenance System',
    description: 'Created a deep learning model to predict equipment failures in manufacturing plants.',
    image: 'https://source.unsplash.com/random/800x600?data-science',
    link: '#',
  },
  {
    title: 'Natural Language Processing Chatbot',
    description: 'Designed and implemented an NLP-based chatbot for customer support automation.',
    image: 'https://source.unsplash.com/random/800x600?machine-learning',
    link: '#',
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <header className={`fixed w-full z-10 transition-all duration-300 ${scrollPosition > 50 ? 'bg-opacity-90 backdrop-blur-md bg-gray-900' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AI Visionary</div>
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-pink-500 transition duration-300">{item}</a>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-pink-500">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-md">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800 hover:text-pink-500">{item}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">AI Solutions Architect</h1>
            <p className="text-xl mb-8 text-gray-300">Transforming Data into Intelligent Decisions</p>
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-500 hover:to-purple-500 transition duration-300 animate-pulse">Innovate with AI</a>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-900 bg-opacity-60 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
              <div className="w-full md:w-1/2 space-y-4">
                {[
                  { icon: Brain, title: 'AI Expertise', desc: 'Developing cutting-edge AI solutions' },
                  { icon: Database, title: 'Data Science', desc: 'Extracting insights from complex datasets' },
                  { icon: ChartBar, title: 'Analytics', desc: 'Turning data into actionable strategies' },
                  { icon: Code, title: 'Machine Learning', desc: 'Building intelligent systems' },
                  { icon: Cpu, title: 'Deep Learning', desc: 'Advancing neural network architectures' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition duration-300">
                    <item.icon className="text-pink-500" size={24} />
                    <div>
                      <h3 className="font-semibold text-purple-300">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  As an AI consultant and data scientist, I specialize in developing innovative solutions that leverage the power of artificial intelligence and machine learning. With expertise in predictive modeling, natural language processing, and computer vision, I help businesses unlock the full potential of their data. My passion lies in creating AI systems that not only solve complex problems but also drive meaningful impact across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a href={project.link} className="text-pink-400 hover:text-pink-300 transition duration-300">Explore Project →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900 bg-opacity-60 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md focus:outline-none focus:border-pink-500 transition duration-300" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md focus:outline-none focus:border-pink-500 transition duration-300" />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md focus:outline-none focus:border-pink-500 transition duration-300"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-pink-500 hover:to-purple-500 transition duration-300">Send Message</button>
              </form>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300"><Github size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300"><Mail size={24} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 AI Visionary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
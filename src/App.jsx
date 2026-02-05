import { Github, Linkedin, Mail, Code, Database, Server, Cpu, ExternalLink } from 'lucide-react';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'Python', 'Java', 'C++', 'Django', 'REST APIs', 'CRUD Operations',
    'MySQL', 'SQL', 'MongoDB', 'Data Analysis', 'Machine Learning',
    'Linear Regression', 'Git', 'Linux'
  ];

  const projects = [
    {
      title: 'Backend Startup Project',
      description: 'Developed backend logic with Django and MySQL to manage employee data.',
      icon: Server,
      tags: ['Django', 'MySQL', 'Backend']
    },
    {
      title: 'Student Performance Predictor',
      description: 'Built a predictive machine learning model using Linear Regression.',
      icon: Cpu,
      tags: ['Python', 'ML', 'Linear Regression']
    },
    {
      title: 'Weather Forecast Application',
      description: 'Integrated OpenWeatherMap API to fetch and display real-time weather data.',
      icon: Code,
      tags: ['API', 'Python', 'REST']
    },
    {
      title: 'COVID-19 Data Analysis',
      description: 'Analyzed and visualized global pandemic trends using Python.',
      icon: Database,
      tags: ['Python', 'Data Analysis', 'Visualization']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sai Nikhil
            </h1>
            <div className="flex gap-6 text-sm">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sai Nikhil – Software Developer |{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Backend & Data-Focused
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              B.Tech Computer Science graduate specializing in Python, SQL, and Django.
              Experienced in building database-driven applications and data analysis.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a B.Tech Computer Science (Data Science) undergraduate from Malla Reddy University
              with a CGPA of 8.4. I have strong skills in Python, Data Structures, and backend development
              using Django. I am seeking roles in Software Development and Backend Engineering.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>Based in Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Projects Showcase</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-900 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-6">
              I'm currently seeking opportunities in Software Development and Backend Engineering.
              Let's connect!
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://linkedin.com/in/sainikhil24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sainikhil24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:sainikhil6300725603@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
            <div className="pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Certifications</h4>
              <p className="text-gray-300">Front End Development Libraries - freeCodeCamp</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Sai Nikhil. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'MathsMorph',
      description: 'An educational platform for mathematics learning and practice. Currently being developed at Felicia Capital Limited with role-based dashboards and interactive learning features.',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      github: '#',
      demo: 'https://www.mathsmorph.site/',
      featured: true,
    },
    {
      title: 'Celerfi',
      description: 'The first unified platform delivering enterprise-grade RPC and real-time indexing across 37+ blockchains. One API. One price. Unlimited possibilities.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Blockchain'],
      github: '#',
      demo: 'https://www.celerfi.network/',
    },
    {
      title: 'Dashr',
      description: 'A fast internet banking service, which you can use to send and receive money, save, budget, invest and do a whole lot more - all in one app.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Banking API'],
      github: '#',
      demo: 'https://greyarea.netlify.app/',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React 19', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'State Management & APIs',
      skills: ['Zustand', 'Redux', 'React Query', 'RESTful APIs', 'Axios', 'JWT'],
    },
    {
      title: 'Tools & Libraries',
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Styled Components', 'JSON Server'],
    },
    {
      title: 'Design',
      skills: ['Figma', 'Responsive Design', 'UI/UX', 'Prototyping'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

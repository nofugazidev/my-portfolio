const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            I'm a passionate frontend developer with experience creating engaging and performant 
            web applications. I specialize in React, TypeScript, and building responsive user 
            interfaces that provide exceptional user experiences. 
          </p>
          <p>
            I hold a B.Tech in Computer Science from The Federal University of Technology, Akure, 
            with a GPA of 4.30/5.0. My academic background includes specialized coursework in Computer 
            Information Systems and Software Engineering, covering database management, IT security, 
            systems analysis, data structures, and algorithms.
          </p>
          <p>
            My approach combines clean code, attention to detail, and a focus on user-centered design. 
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm 
            not coding, I love staying up-to-date with the latest web technologies and continuously 
            improving my skills through courses and hands-on projects.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Education & Certifications</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-1">
                B.Tech, Computer Science
              </h4>
              <p className="text-gray-400 mb-1">The Federal University of Technology, Akure</p>
              <p className="text-sm text-gray-500 mb-2">2017 - 2024 • GPA: 4.30/5.0</p>
              <p className="text-gray-300 text-sm">
                Specialized in Computer Information Systems and Software Engineering. 
                Completed thesis on "Simple Additive Weighing Method for Ranking Environmental Impact Assessment."
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-1">
                Modern JavaScript from the Beginning 2.0
              </h4>
              <p className="text-gray-400 mb-1">Udemy • Instructed by Brad Traversy</p>
              <p className="text-sm text-gray-500">2024</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-1">
                National Youth Service Corps
              </h4>
              <p className="text-gray-400 mb-1">Certification</p>
              <p className="text-sm text-gray-500">2024 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

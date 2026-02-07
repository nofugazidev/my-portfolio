const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Felicia Capital Limited',
      location: 'Lagos, Nigeria',
      period: 'November 2025 - Present',
      description: [
        'Built 4 role-based dashboards (Admin, Tutor, Parent, Student) with React 19, TypeScript, and Tailwind CSS, including authentication, routing, and responsive layouts across 98 source files',
        'Implemented JWT-based auth with Zustand state management supporting 4 user types, including OTP email verification, password reset, and forced password change flows, integrated with 15+ API endpoints',
        'Developed CRUD for students and tasks with real-time progress tracking, status management (NOT_STARTED/IN_PROGRESS/COMPLETED), bulk operations, and data synchronization across dashboards via REST APIs',
        'Integrated 20+ REST endpoints with Axios interceptors, centralized state management using Zustand (persisted), reusable component library (78 components), and TypeScript interfaces for type-safe API communication',
      ],
    },
    {
      title: 'Mobile App Frontend Engineer',
      company: 'Seamflex Consulting',
      location: 'Calgary, Alberta, Canada',
      period: 'May 2025 - July 2025',
      description: [
        'Resolved auto-populated email issue post-app reinstall, improving data privacy and onboarding by 15%',
        'Integrated RESTful API endpoints powering over 30% of core features, including rating and profile modules',
        'Built trip details interface that increased retention by 15% and implemented chat expiration logic that reduced storage load by 10%',
        'Delivered 30% of frontend screens across iOS and Android using React Native, Redux, TypeScript, and Axios',
      ],
    },
    {
      title: 'Mobile App Frontend Engineer',
      company: 'Esusu Smart Solution',
      location: 'Abuja, Nigeria',
      period: 'April 2025 - June 2025',
      description: [
        'Built and debugged 15+ React Native UI components, leading to a 40% drop in UI bugs',
        'Cut sprint delays by 25% by setting up a mock JSON server for backend simulation',
        'Boosted development efficiency by 30% through simulated API calls with user data',
        'Collaborated on API mocks, accelerating feature delivery timelines by 20%',
      ],
    },
    {
      title: 'Frontend Engineer Facilitator, Center Manager',
      company: 'A+ Computer Training Technology Limited',
      location: 'Bauchi State',
      period: 'August 2024 - August 2025',
      description: [
        'Served as Center Manager & Frontend Facilitator at A+ Computer Tech Training, Bauchi State (NYSC)',
        'Managed daily operations and coordinated student training activities',
        'Delivered Frontend Web Development training (HTML, CSS, JavaScript, React, Tailwind CSS)',
        'Built leadership, organizational, and technical mentoring skills',
      ],
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Hydrogen HQ',
      location: 'Lagos, Nigeria',
      period: 'Dec 2022 - January 2025',
      description: [
        'Reduced load times by 25% and boosted user satisfaction by optimizing frontend performance',
        'Improved development speed by 20% by building responsive web interfaces and reusable UI components with ReactJS, TypeScript, Tailwind CSS, and Styled Components',
        'Accelerated release cycles by 15% by integrating RESTful APIs and delivering new features through Agile sprints',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gradient">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-cyan-400 pl-6 pb-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold text-cyan-400">{exp.title}</h3>
              <p className="text-gray-400 mb-1">{exp.company}{exp.location && ` • ${exp.location}`}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

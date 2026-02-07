import { useEffect, useState } from 'react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/nofugazidev', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/mubaraq-oyebisi-a10050153/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:oyebisimubarak4@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Frontend Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Building beautiful and functional web experiences
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          With 5 years of experience crafting modern, responsive, and user-friendly interfaces
        </p>

        <div className="flex justify-center space-x-6 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <span className="mr-2">Scroll to explore</span>
          <HiArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}

export default Hero

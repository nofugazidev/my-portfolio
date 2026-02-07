const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center text-gray-400">
        <p>&copy; {currentYear} Mubaraq Oyebisi. All rights reserved.</p>
        
      </div>
    </footer>
  )
}

export default Footer

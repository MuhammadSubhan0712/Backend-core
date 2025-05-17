const Footer = () => {
  return (
    <footer className="bg-cyberpunk-card border-t border-cyberpunk-cyan/20 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink">
              NEONET
            </span>
            <p className="text-gray-400 text-sm mt-1">
              The pulse of the digital underground
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan">
              API
            </a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan">
              Status
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-cyberpunk-cyan/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Neonet. All code is open-source.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
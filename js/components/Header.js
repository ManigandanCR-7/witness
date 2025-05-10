function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white header-shadow' : 'bg-transparent'}`} data-id="7v7jn5zsb" data-path="js/components/Header.js">
      <div className="blog-container py-4" data-id="xlj432un2" data-path="js/components/Header.js">
        <div className="flex items-center justify-between" data-id="rk326h4a5" data-path="js/components/Header.js">
          <div className="flex items-center" data-id="958ijeb03" data-path="js/components/Header.js">
            <h1 className="text-2xl font-bold text-serene-600" data-id="ygqpx6omb" data-path="js/components/Header.js">
              <i className="fas fa-dumbbell mr-2" data-id="e42imfbnq" data-path="js/components/Header.js"></i>
              <span className="gradient-text" data-id="4rkdpykoj" data-path="js/components/Header.js">Fit</span>Track
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8" data-id="t6ftys0vc" data-path="js/components/Header.js">
            <a href="#" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="0ugqb9ixv" data-path="js/components/Header.js">Home</a>
            <a href="#workouts" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="iruv6hdvn" data-path="js/components/Header.js">Workouts</a>
            <a href="#categories" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="orswm3te1" data-path="js/components/Header.js">Categories</a>
            <a href="#about" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="bi7mqs4si" data-path="js/components/Header.js">About</a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="el4r3sgb8" data-path="js/components/Header.js">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4" data-id="p60b8pwoa" data-path="js/components/Header.js">
            <button className="hidden md:flex items-center justify-center px-4 py-2 rounded-lg bg-serene-500 text-white hover:bg-serene-600 transition-all" data-id="ga47o9j40" data-path="js/components/Header.js">
              <i className="fas fa-bell mr-2" data-id="zpo359v4k" data-path="js/components/Header.js"></i>
              My Reminders
            </button>
            
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)} data-id="38k3p2kkt" data-path="js/components/Header.js">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="30bic0fc5" data-path="js/components/Header.js"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen &&
        <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg" data-id="93yy20u96" data-path="js/components/Header.js">
            <nav className="flex flex-col space-y-4 px-4" data-id="wt0kvek89" data-path="js/components/Header.js">
              <a href="#" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="5v68s0s8r" data-path="js/components/Header.js">Home</a>
              <a href="#workouts" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="q3rjdj7ij" data-path="js/components/Header.js">Workouts</a>
              <a href="#categories" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="xekucb6fk" data-path="js/components/Header.js">Categories</a>
              <a href="#about" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="48nglcqsc" data-path="js/components/Header.js">About</a>
              <a href="#contact" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="bm4sx8seq" data-path="js/components/Header.js">Contact</a>
              <div className="pt-2 pb-1 border-t border-gray-100" data-id="4e5suqn3s" data-path="js/components/Header.js">
                <button className="flex items-center text-serene-600 hover:text-serene-700 transition-all" data-id="7odxar56l" data-path="js/components/Header.js">
                  <i className="fas fa-bell mr-2" data-id="4ey96q0pu" data-path="js/components/Header.js"></i> My Reminders
                </button>
              </div>
            </nav>
          </div>
        }
      </div>
    </header>);
}
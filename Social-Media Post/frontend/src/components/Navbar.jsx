import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const Navbar = () => {
//   const { user, logout } = useAuth();

  return (
    <nav className="bg-cyberpunk-dark border-b border-cyberpunk-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink">
              NEONET
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/public" 
                className="text-gray-300 hover:text-cyberpunk-cyan px-3 py-2 rounded-md text-sm font-medium"
              >
                Explore
              </Link>
              {/* {user && (
                <>
                  <Link 
                    to="/feed" 
                    className="text-gray-300 hover:text-cyberpunk-cyan px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My Feed
                  </Link>
                  <Link 
                    to="/profile" 
                    className="text-gray-300 hover:text-cyberpunk-cyan px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>
                </>
              )} */}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="ml-4 flex items-center md:ml-6">
            {/* {user ? (
              <button
                onClick={logout}
                className="bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-cyan text-black px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Logout
              </button>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="bg-cyberpunk-card border border-cyberpunk-cyan text-cyberpunk-cyan px-4 py-2 rounded-md text-sm font-bold hover:bg-cyberpunk-cyan/10 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink text-black px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Register
                </Link>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
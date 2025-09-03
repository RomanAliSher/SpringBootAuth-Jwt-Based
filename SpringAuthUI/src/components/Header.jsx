import { Link } from 'react-router-dom'
import { useAuthContext } from './store/Auth-Context'
import { useToast } from './store/Toast-Context'

const Header = () => {
  const { user, logout, isAuthenticated } = useAuthContext()
  const toast = useToast()

  const handleLogout = () => {
    logout()
    toast.info('Logged out successfully! See you next time!')
  }

  return (
    <header className="relative z-20 border-b-4 border-yellow-400 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 border-2 border-black relative transform group-hover:scale-110 transition-transform duration-200">
                <div className="absolute inset-1 bg-black"></div>
                <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400"></div>
                <div className="absolute bottom-2 left-1 right-1 h-1 bg-yellow-400"></div>
              </div>
              <h1 className="text-2xl font-bold text-yellow-400 tracking-wider group-hover:text-yellow-300 transition-colors duration-200">
                SPRINGAUTH
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-yellow-400 hover:text-yellow-300 font-bold tracking-wide transition-colors duration-200 relative group"
            >
              HOME
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></div>
            </Link>

            {isAuthenticated() ? (
              <>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-bold">
                      {user?.username || user?.email || 'USER'}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black font-bold tracking-wide transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    LOGOUT
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold tracking-wide transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  LOGIN
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-bold tracking-wide transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  SIGNUP
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Animated Border Elements */}
      <div className="absolute bottom-0 left-0 w-4 h-1 bg-yellow-400 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-4 h-1 bg-yellow-400 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-2 h-1 bg-yellow-400 animate-ping"></div>
      <div className="absolute bottom-0 right-1/4 w-2 h-1 bg-yellow-400 animate-ping"></div>
    </header>
  )
}

export default Header
import { useAuthContext } from './store/Auth-Context'

const Home = () => {
  const { user } = useAuthContext();

  // Debug: Log user data to understand the structure
  console.log('User data in Home component:', user);

  // Helper function to safely get user display name
  const getUserDisplayName = () => {
    if (!user) return 'USER';
    return user.username || user.firstName || user.name || user.email?.split('@')[0] || 'USER';
  };

  // Helper function to safely get user email
  const getUserEmail = () => {
    if (!user) return 'N/A';
    return user.email || 'N/A';
  };

  // Helper function to safely get user mobile
  const getUserMobile = () => {
    if (!user) return 'N/A';
    return user.mobileNumber || user.mobile || user.phoneNumber || 'N/A';
  };

  // Helper function to safely get user roles
  const getUserRoles = () => {
    if (!user) return 'N/A';
    if (Array.isArray(user.roles)) {
      return user.roles.join(', ');
    }
    return user.roles || user.role || 'USER';
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-transparent to-transparent opacity-5 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-4 tracking-wider animate-pulse">
              SPRINGAUTH
            </h1>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-3 h-3 bg-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
            <p className="text-xl md:text-2xl text-yellow-300 mb-8 font-mono">
              RETRO AUTHENTICATION SYSTEM
            </p>
            <p className="text-lg text-yellow-400 opacity-75 max-w-2xl mx-auto leading-relaxed">
              Experience the golden age of gaming with modern security. 
              Your gateway to the digital frontier.
            </p>
          </div>
        </div>

        {user ? (
          /* Welcome Back Section */
          <div className="bg-black bg-opacity-60 border-4 border-yellow-400 p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black relative">
                  <div className="absolute inset-2 bg-black"></div>
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400"></div>
                  <div className="absolute bottom-4 left-3 right-3 h-2 bg-yellow-400"></div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4 tracking-wide">
                WELCOME BACK, {getUserDisplayName().toUpperCase()}!
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-black border-2 border-yellow-400 p-4">
                  <h3 className="text-yellow-400 font-bold mb-2 flex items-center">
                    <div className="w-2 h-2 bg-green-400 mr-2 animate-pulse"></div>
                    USER PROFILE
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-yellow-300">NAME: {getUserDisplayName()}</span> </p>
                    <p><span className="text-yellow-300">EMAIL: {getUserEmail()}</span> </p>
                    <p><span className="text-yellow-300">MOBILE: {getUserMobile()}</span> </p>
                    <p><span className="text-yellow-300">ROLES: {getUserRoles()}</span> </p>
                  </div>
                </div>
                
                <div className="bg-black border-2 border-yellow-400 p-4">
                  <h3 className="text-yellow-400 font-bold mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 mr-2 animate-pulse"></div>
                    SYSTEM STATUS
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 mr-2"></div>
                      <span className="text-yellow-300">CONNECTION:SECURE</span> 
                    </p>
                    <p className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 mr-2"></div>
                      <span className="text-yellow-300">SESSION:ACTIVE</span> 
                    </p>
                    <p className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 mr-2"></div>
                      <span className="text-yellow-300">SECURITY:LEVEL 9</span> 
                    </p>
                    <p className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 mr-2 animate-pulse"></div>
                      <span className="text-yellow-300">STATUS:ONLINE</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Guest Section */
          <div className="bg-black bg-opacity-60 border-4 border-yellow-400 p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-transparent to-red-400 opacity-10"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-red-400 border-4 border-black mx-auto mb-6 relative animate-pulse">
                <div className="absolute inset-2 bg-black"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-red-400"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-400"></div>
                <div className="absolute bottom-4 left-3 right-3 h-1 bg-red-400"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-red-400 mb-4 tracking-wide">
                ACCESS DENIED
              </h2>
              <p className="text-yellow-400 mb-6">
                Please authenticate to access the system features.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/login"
                  className="px-8 py-3 border-2 border-green-400 bg-black text-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 transform hover:scale-105 active:scale-95 font-semibold tracking-wide"
                >
                  LOGIN TO SYSTEM
                </a>
                <a
                  href="/signup"
                  className="px-8 py-3 border-2 border-blue-400 bg-black text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-200 transform hover:scale-105 active:scale-95 font-semibold tracking-wide"
                >
                  CREATE ACCOUNT
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black border-2 border-yellow-400 p-6 transform hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-yellow-400 border-2 border-black mb-4 relative">
              <div className="absolute inset-1 bg-black"></div>
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-yellow-400"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">SECURE</h3>
            <p className="text-yellow-300 text-sm">
              Military-grade encryption protects your data with retro-style reliability.
            </p>
          </div>

          <div className="bg-black border-2 border-yellow-400 p-6 transform hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-yellow-400 border-2 border-black mb-4 relative">
              <div className="absolute inset-1 bg-black"></div>
              <div className="absolute top-1 left-1 right-1 bottom-1 bg-yellow-400"></div>
              <div className="absolute top-2 left-2 right-2 bottom-2 bg-black"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">FAST</h3>
            <p className="text-yellow-300 text-sm">
              Lightning-quick authentication processing at the speed of pixels.
            </p>
          </div>

          <div className="bg-black border-2 border-yellow-400 p-6 transform hover:scale-105 transition-transform duration-200">
            <div className="w-12 h-12 bg-yellow-400 border-2 border-black mb-4 relative">
              <div className="absolute inset-1 bg-black"></div>
              <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400"></div>
              <div className="absolute bottom-2 left-2 right-2 h-2 bg-yellow-400"></div>
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">RETRO</h3>
            <p className="text-yellow-300 text-sm">
              Classic 8-bit aesthetics meets modern authentication technology.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black bg-opacity-60 border-4 border-yellow-400 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-8 tracking-wide">
              SYSTEM STATISTICS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2 animate-pulse">99.9%</div>
                <div className="text-sm text-yellow-400">UPTIME</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2 animate-pulse">256</div>
                <div className="text-sm text-yellow-400">BIT SECURITY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2 animate-pulse">8</div>
                <div className="text-sm text-yellow-400">BIT STYLE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2 animate-pulse">0</div>
                <div className="text-sm text-yellow-400">BREACHES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

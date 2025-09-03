import Header from './components/Header'
import Footer from './components/Footer'
import ToastContainer from './components/Toast'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
  const navigation=useNavigation()
 
  return (
    <>
      <Header />
      <ToastContainer />
       
      <main className="h-auto pt-16 transition-colors duration-300 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {navigation.state === 'loading' ? (
          <div className="flex items-center justify-center min-h-screen py-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
              <span className="text-lg text-gray-500 dark:text-gray-400">Loading...</span>
            </div>
          </div>
        ) : (
          
            <Outlet />
          
        )}
      </main>
      <Footer />
      </>
    
  )
}

export default App

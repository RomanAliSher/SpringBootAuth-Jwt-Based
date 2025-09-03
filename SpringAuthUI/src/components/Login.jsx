import React, { useEffect } from 'react'
import PageHeading from './PageHeading'
import { Form } from 'react-router-dom'
import { useNavigate, useNavigation, useActionData } from 'react-router-dom'
import apiCall from '../api/apiCall'
import { useToast } from './store/Toast-Context'
import { useAuthContext } from './store/Auth-Context'

function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  let navigation = useNavigation();
  let isSubmitting = navigation.state === 'submitting';
  const actionData = useActionData();
  const toast = useToast();
  const from = sessionStorage.getItem('redirectPath') || '/';

  

  useEffect(() => {
    if (actionData) {
      if (actionData.success) {
        toast.success(actionData.message || "Login successful");
        sessionStorage.removeItem('redirectPath'); 
        navigate(from);
        login(actionData.jwtToken, actionData.user);
      } else if (actionData.errors) {
        toast.error(actionData.errors);
      }
    }
  }, [actionData, navigate, login]);

  return (
    <div className="container min-h-screen px-4 pb-4 mx-auto">
      <PageHeading 
        title="SYSTEM ACCESS"
        heading="Welcome back! Please sign in to your account"
      />
      
      <div className="max-w-md mx-auto">
        <div className="p-6 border rounded-lg shadow-xl bg-black/90 border-green-400 backdrop-blur-sm">
          <div className="mb-2 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-green-400">
              Sign In
            </h1>
            <p className="text-yellow-400">
              Access your golden realm
            </p>
          </div>

          <Form method='POST' className="space-y-3">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-green-400">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full py-2 pl-8 pr-4 text-green-400 placeholder-green-400 transition-colors duration-300 border border-green-400 rounded-lg bg-black focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none font-mono"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-green-400">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full py-2 pl-8 pr-4 text-green-400 placeholder-green-400 transition-colors duration-300 border border-green-400 rounded-lg bg-black focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none font-mono"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 text-green-400 border-green-400 rounded focus:ring-green-400 bg-black"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-yellow-400">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full px-6 py-3 font-semibold text-black transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 focus:outline-none focus:ring-4 focus:ring-green-400/20 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                "ACCESS SYSTEM"
              )}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-yellow-400"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-yellow-400 bg-black">Or continue with...to be added soon</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 text-sm font-medium text-yellow-400 transition-colors duration-300 border border-yellow-400 rounded-lg bg-black hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 text-sm font-medium text-yellow-400 transition-colors duration-300 border border-yellow-400 rounded-lg bg-black hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-yellow-400">
                Don't have an account?{' '}
                <a href="/signup" className="font-medium text-blue-400 hover:text-blue-300">
                  Sign up here
                </a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const userData = { email: email, password: password };
  
  try {
    const response = await apiCall.post('/auth/login', userData);
    const { message, jwtToken, user } = response.data;
    console.log(jwtToken, user, message);
    return { success: true, message: "Login successful", jwtToken, user };
  }
  catch (error) {
    if (error.response?.status === 401) {
      return { success: false, errors: 'Invalid email or password' };
    }
    throw new Response(
      error.message || 'Something went wrong',
      { status: 500 }
    );
  }
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Login Successful', formData);
      navigate('/customer-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex overflow-hidden rounded-xl shadow-2xl">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")' }}>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 bg-blue-900 p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Login</h2>
            <p className="mt-2 text-sm text-blue-200">Enter your credentials to access the dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Username"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-2 w-full rounded-xl bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-300">{errors.email}</p>
              )}
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-2 w-full rounded-xl bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-300">{errors.password}</p>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-200 hover:text-white">
                  Forgot Password?
                </a>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-blue-900 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Login
              </button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-blue-200">
                Don't have an account?{" "}
                <a href="#" className="font-medium text-white hover:underline">
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
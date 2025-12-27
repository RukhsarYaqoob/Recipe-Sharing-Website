import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return;
    }
    console.log('Registed data:', JSON.stringify({fullname,email,password,confirmPassword},null,2));
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-8 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Create Your Account
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input 
            type="text" 
            name="name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input 
            type="password" 
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
            placeholder="Confirm your password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:bg-orange-600 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Create Account
        </button>
      </form>
      
      <p className="text-center mt-6 text-gray-600">
        Already have an account?{' '}
        <Link 
          to="/login" 
          className="text-orange-500 font-medium no-underline hover:text-orange-600 transition-colors duration-300"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginModal = ({ showModal, closeModal, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  if (!showModal) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      if (!name || !email || !password || !confirmPassword) {
        alert('Please fill all fields');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          name,
          email,
          password,
        });

        alert('Registered successfully!');
        localStorage.setItem('username', name);
        onLogin?.({ name });
        closeModal();
        navigate('/home');
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.error || 'Registration failed');
      }
    } else {
      if (!email || !password) {
        alert('Please enter email and password');
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });

        const username = response.data.user.name;
        alert('Login successful!');
        localStorage.setItem('username', username);
        onLogin?.({ name: username });
        closeModal();
        navigate('/home');
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.error || 'Login failed');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-md w-full max-w-sm p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegister ? 'Register' : 'Login'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder={isRegister ? 'New Password' : 'Password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {isRegister && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          {isRegister ? (
            <>
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => setIsRegister(false)}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Not registered?{' '}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => setIsRegister(true)}
              >
                Register here
              </span>
            </>
          )}
        </p>

        <button
          onClick={closeModal}
          className="mt-4 block mx-auto text-sm text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

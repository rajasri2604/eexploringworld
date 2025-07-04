import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ showModal, closeModal, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  if (!showModal) return null;

  const handleSubmit = (e) => {
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

      // Store username on register
      localStorage.setItem('username', name);
      alert(`Registered successfully as ${name}`);
      onLogin?.({ name });
      closeModal();
    } else {
      if (!email || !password) {
        alert('Please enter email and password');
        return;
      }

      // Simulate login, extract name from email
      const extractedName = email.split('@')[0];
      localStorage.setItem('username', extractedName);
      alert('Login successful!');
      onLogin?.({ name: extractedName });
      closeModal();
      navigate('/home');
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

import React, { useState, useEffect } from 'react';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle, doSignInWithApple } from '../firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';

const RegisterModal=({ isOpen, onClose, onSwitch })=> {
    
  const [isAnimating,setIsAnimating]=useState(false);
  const [isVisible,setIsVisible]=useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSwitch = () => {
    setIsAnimating(false);
    setIsVisible(false);
    onSwitch();
  };

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      setErrorMessage('');
      try {
        await doCreateUserWithEmailAndPassword(email, password, fullname);
        onSwitch();
      } catch (error) {
        setErrorMessage(error.message || 'An error occurred while registering. Please try again.');
      } finally {
        setIsRegistering(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false);
        setErrorMessage('An error occurred while signing in with Google. Please try again.');
      });
    }
  };

  const onAppleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithApple().catch(err => {
        setIsSigningIn(false);
        setErrorMessage('An error occurred while signing in with Apple. Please try again.');
      });
    }
  };

  if (!isVisible) {return null;}

  return (
    <div>
      <main className={`relative bg-white py-10 px-15 rounded-lg shadow-lg w-md transform transition-transform duration-300 ${isAnimating ? 'scale-100 translate-y-0' : 'scale-0 translate-y-10'}`}>
        <a
          className="absolute top-3 right-5 text-2xl cursor-pointer"
          onClick={onClose}
        >
            &times;
        </a>
        {errorMessage &&
          <div className="relative flex gap-2 mt-5 mb-4 py-5 px-15 bg-[#FBE6E6] text-xs justify-center items-center rounded-sm">
            <svg className='w-5 h-5 absolute top-auto left-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="rgb(211, 0, 1)">
              <path d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 " stroke="none" fill-rule="evenodd"/>
            </svg> 
            <p>
              {errorMessage}
            </p>
          </div>
        }
        <h2 className="text-xl font-bold mb-4">Create Your SalimBigkas Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mt-10 mb-4 text-left relative">
            <input
              type="text"
              id="fullname"
              autoComplete="name"
              required
              autoFocus
              minLength={5}
              className={`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${fullname ? 'border-[#2C3E50]' : 'border-gray-300'}`}
              placeholder=" "
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label 
              className={`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${fullname ? 'bg-white top-[-10px] text-[#2C3E50] text-sm' : 'top-4 text-gray-500 text-base'}`} 
              htmlFor="fullname">
                Full Name
            </label>
          </div>
          <div className="mt-5 mb-4 text-left relative">
            <input
              type="email"
              id="email"
              autoComplete="email"
              required
              minLength={5}
              className={`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${email ? 'border-[#2C3E50]' : 'border-gray-300'}`}
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label 
              className={`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${email ? 'bg-white top-[-10px] text-[#2C3E50] text-sm' : 'top-4 text-gray-500 text-base'}`} 
              htmlFor="email">
                Email
            </label>
          </div>
          <div className="mt-5 mb-4 text-left relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              required
              minLength={8}
              className={`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${password ? 'border-[#2C3E50]' : 'border-gray-300'}`}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onFocus={() => setShowPassword(true)}
            />
            <button
              type="button"
              className="absolute right-4 top-4.5 border-none bg-transparent cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye size={24} color={`${password ? '#2C3E50' : 'oklch(87.2% 0.01 258.338)'}`}/>
              ) : (
                <EyeClosed size={24} color={`${password ? '#2C3E50' : 'oklch(87.2% 0.01 258.338)'}`}/>
              )}
            </button>
            <label
              htmlFor="password"
              className={`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${password ? 'bg-white top-[-10px] text-[#2C3E50] text-sm' : 'top-4 text-gray-500 text-base'}`}
            >
                Password
            </label>
          </div>
          <button
            type="submit"
            className={`w-full mt-5 bg-[#2C3E50] text-white p-4 rounded-lg shadow-md drop-shadow-lg ${isRegistering ? 'opacity-50 cursor-not-allowed' : 'hover:font-medium hover:border-[#386BF6] hover:bg-[#34495e]'}`}
            disabled={isRegistering}
          >
            {isRegistering ? 'Registering...' : 'Register'}
          </button>
        </form>
        <div className='flex flex-row mt-5 w-full'>
          <div className='border-b-1 mb-2.5 mr-2 w-full border-gray-200'></div><div className='text-sm mb-0.5 w-fit text-gray-500'>or</div><div className='border-b-2 mb-2.5 ml-2 w-full border-gray-200'></div>
        </div>
        <button
          disabled={isSigningIn}
          onClick={(e) => { onGoogleSignIn(e); }}
          className={`relative w-full flex mt-5 items-center justify-center text-black p-4 border rounded-lg shadow-md drop-shadow-lg ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-[#e0f2f1] hover:text-[#2C3E50]  hover:border-[#386BF6] transition duration-300 active:bg-[#ecf0f1]'}`}>
          <svg className="w-5 h-5 absolute top-auto left-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_40)">
              <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
              <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
              <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
              <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {isSigningIn ? 'Signing In...' : 'Continue with Google'}
        </button>
        <button
          disabled={isSigningIn}
          onClick={(e) => { onAppleSignIn(e); }}
          className={`relative w-full flex mt-4 items-center justify-center text-black p-4 border rounded-lg shadow-md drop-shadow-lg ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-[#e0f2f1] hover:text-[#2C3E50]  hover:border-[#386BF6] transition duration-300 active:bg-[#ecf0f1]'}`}>
          <svg className="w-5 h-5 absolute top-auto left-5" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 22.773 22.773">
            <g>
              <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/>
              <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
            </g>
          </svg>
          {isSigningIn ? 'Signing In...' : 'Continue with Apple'}
        </button>
        <p className="mt-4 text-sm">
            Already on SalimBigkas? <a className='hover:underline' href="#" onClick={handleSwitch}>Login</a>.
        </p>
      </main>
    </div>
  );
};

export default RegisterModal;
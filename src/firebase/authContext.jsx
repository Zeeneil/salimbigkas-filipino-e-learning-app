import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider=({ children })=> {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [isAppleUser, setIsAppleUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    try {
      if (user) {
        setCurrentUser({...user});
        console.log('User logged in:', user);
        const isEmail = user.providerData.some(
          (provider) => provider.providerId === 'password'
        );
        setIsEmailUser(isEmail);
        const isGoogle = user.providerData.some(
          (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
        );
        setIsGoogleUser(isGoogle);
        const isApple = user.providerData.some(
          (provider) => provider.providerId === 'apple.com'
        );
        setIsAppleUser(isApple);
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error('Error initializing user:', error);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    isAppleUser,
    currentUser,
    setCurrentUser,
    loading, // Expose loading state if needed
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-white">
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{ width: '50px', height: '50px', color: '#4A90E2' }}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
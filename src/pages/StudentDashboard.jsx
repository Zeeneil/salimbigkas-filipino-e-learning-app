import React from 'react';
import { useAuth } from '../firebase/authContext';
import { doSignOut } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const StudentDashboard=()=> {

  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-wrap mx-auto bg-white">
      <button onClick={() => { doSignOut().then(() => { navigate('/'); }); }} className='text-sm text-blue-600 underline'>Logout</button>
      <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
    </div>
  );
};

export default StudentDashboard;
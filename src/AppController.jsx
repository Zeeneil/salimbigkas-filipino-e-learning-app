import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import StudentDashboard from './pages/StudentDashboard';

const AppController=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppController; 
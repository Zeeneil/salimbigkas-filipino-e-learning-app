import './App.css';
import { Route, Routes} from 'react-router-dom';
import { AuthProvider } from './firebase/authContext';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/admin" element={<AdminDashboard/>}></Route>
          <Route path="/teacher" element={<TeacherDashboard/>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
  
}

export default App;
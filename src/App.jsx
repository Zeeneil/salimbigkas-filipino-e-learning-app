import './App.css';
import AppController from './AppController';
import { AuthProvider } from './firebase/authContext';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <AppController/>
      </AuthProvider>
    </div>
  );
  
}

export default App;
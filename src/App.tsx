import './App.css'
import {
  Outlet,
} from "react-router-dom";
import TopNavbar from './components/navigation/TopNavbar'
import LoginForm from './pages/login/LoginForm'
import { AuthContextProvider } from './contexts/AuthContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AuthContextProvider>
        <TopNavbar/>
        <Outlet />
      </AuthContextProvider>
        
    </div>
  )
}

export default App

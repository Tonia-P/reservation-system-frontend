import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Button from './components/interaction/Button'
import TopNavbar from './components/navigation/TopNavbar'
import LoginForm from './pages/login/LoginForm'
import { AuthContextProvider } from './contexts/AuthContext';

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

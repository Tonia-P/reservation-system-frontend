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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopNavbar/>
        <Outlet />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </div>
  )
}

export default App

import './App.css'
import {
  Outlet
} from "react-router-dom";
import TopNavbar from './components/navigation/TopNavbar'
import { AuthContextProvider, useAuth } from './contexts/AuthContext';
import { ChangeEvent } from 'react';

function App() {

  const {
    authUser, isLogged
  } = useAuth();

  return (
    <div className="App">
      <AuthContextProvider>

        <TopNavbar/>
        <p>
          {authUser?.fname}
          </p>
          {isLogged}
        <Outlet />
      </AuthContextProvider>
        
    </div>
  )
}

export default App

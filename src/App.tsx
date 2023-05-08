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
        <Outlet />
        {authUser?.fname}
      </AuthContextProvider>
        
    </div>
  )
}

export default App

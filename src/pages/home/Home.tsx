
import {
  Outlet
} from "react-router-dom";
import TopNavbar from '../../components/navigation/TopNavbar'
import { AuthContextProvider, useAuth } from '../../contexts/AuthContext';
import { ChangeEvent } from 'react';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

function Home() {


  const {
    authUser, isLogged
  } = useAuth();

  return (
      <AuthContextProvider>

        <TopNavbar/>
        <p>
          {authUser?.fname}
          </p>
          {isLogged}
        <Outlet />
      </AuthContextProvider>
        
  )
}

export default Home

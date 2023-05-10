import "./App.css";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import TopNavbar from "./components/navigation/TopNavbar";
import { AuthContextProvider, useAuth } from "./contexts/AuthContext";
import { ChangeEvent } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./pages/login/LoginForm";
import RegisterForm from "./pages/register/RegisterPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

function App() {
  const { authUser, isLogged } = useAuth();

  return (
    <>
      <div className="App">
          <Router>
            <TopNavbar />
            <p>
              <br />
              <br />
              <br />
              <br />
              {authUser?.fname}
            </p>
            {isLogged}

            <Routes>
              <Route path="/" element={<>Kappa</>} />
              <Route
                path="/login"
                element={
                  isLogged ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <LoginForm />
                  )
                }
              />
              <Route path="/register" element={
                  isLogged ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <RegisterForm />
                  )
                } />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        
          </Router>
      </div>
    </>
  );
}

export default App;

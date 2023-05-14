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
import { RoomsPage } from "./pages/dashboard/rooms/RoomsPage";
import { EventsPage } from "./pages/dashboard/events/EventsPage";
import { EventContextProvider } from "./contexts/EventContext";
import { EventsDetails } from "./pages/dashboard/events/EventsDetails";

function App() {
  const { authUser, isLogged } = useAuth();

  return (
    <>
      <div className="App">
        <Router>
          <TopNavbar />

          <Routes>
            <Route path="/" element={<>TODO</>} />
            <Route
              path="/login"
              element={
                isLogged ? <Navigate to="/dashboard" replace /> : <LoginForm />
              }
            />
            <Route
              path="/register"
              element={
                isLogged ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <RegisterForm />
                )
              }
            />

            {isLogged && (
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="rooms" element={<RoomsPage />} />
                <Route path="room/:id" element={<RoomsPage />} />
                <Route path="event/:roomId" element={<EventsDetails />} />
                <Route path="events" element={<EventsPage />} />
              </Route>
            )}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

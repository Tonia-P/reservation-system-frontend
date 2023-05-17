import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import TopNavbar from "./components/navigation/TopNavbar";
import LoginForm from "./pages/login/LoginForm";
import RegisterForm from "./pages/register/RegisterPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { RoomsPage } from "./pages/dashboard/rooms/RoomsPage";
import { EventsPage } from "./pages/dashboard/events/EventsPage";
import { EventsDetails } from "./pages/dashboard/events/EventsDetails";
import { RoomDetails } from "./pages/dashboard/rooms/RoomDetails";
import { useAuth } from "./contexts/AuthContext";
import { RoomContextProvider } from "./contexts/RoomContext";
import { MyReservationCard } from "./components/cards/MyReservationCard";
import { MyReservationsList } from "./pages/dashboard/my-reservations/MyReservationsList";
import { MyEventsList } from "./pages/my-event/MyEventsList";

function App() {
  const { authUser, isLogged } = useAuth();

  return (
    <>
      <div className="App">

      <RoomContextProvider>
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
                <Route path="room/:roomId" element={<RoomDetails />} />
                <Route path="event/:roomId" element={<EventsDetails />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="my-reservations" element={<MyReservationsList />} />
                <Route path="my-events" element={<MyEventsList />} />
              </Route>
            )}
          </Routes>
        </Router>
            </RoomContextProvider>
      </div>
    </>
  );
}

export default App;

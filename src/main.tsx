import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import LoginForm from './pages/login/LoginForm';
import RegisterForm from './pages/register/RegisterPage';
import { Dashboard } from './pages/dashboard/Dashboard';
import { AuthContextProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)

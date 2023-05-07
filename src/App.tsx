import './App.css'
import {
  Outlet,
} from "react-router-dom";
import TopNavbar from './components/navigation/TopNavbar'

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Outlet />
    </div>
  )
}

export default App

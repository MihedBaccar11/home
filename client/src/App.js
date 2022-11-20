import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {Routes,Route} from "react-router-dom"
import PrivateRoute from "./privateRoute/PrivateRoutes";

function App() {
  return(
  <Routes>
    azdazdazdazdazd
  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route element={<PrivateRoute />}>
    <Route path="/dashboard" element={<Dashboard/>} />

  </Route>
</Routes>
  )
}

export default App;

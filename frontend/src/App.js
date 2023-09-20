import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Admin from "./Pages/Admin";
import Complaint from "./Pages/Compaint";
import Login from "./Pages/Login";
import './style.scss'

function App() {
  const { user } = useContext(AuthContext)
  console.log(user);
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to='/login' />
    }
    return children
  }
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Complaint />} />
        <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

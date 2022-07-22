import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as  Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const {user} = useContext(AuthContext);
  return (
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type={`movie`} />} />
            <Route path="/series" element={<Home type={`series`} />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
  )
};
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDJhZDQ1MTI4NDdmYmM4MGVhODljNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODA2MTUyMSwiZXhwIjoxNjU4NDkzNTIxfQ.tMGVsDUjM2EDNeqZFeHbnN2Yr4UgVs2wa-W9nAVQzLs
export default App;

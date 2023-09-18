import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Public from "./components/Public";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* public routes */}
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route index element={<Public/>} />
        {/* protected routes */}
        <Route element={<RequireAuth/>}>
          <Route path="home" element={<Home/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Public from "./pages/Public";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import CreateGroups from "./components/CreateGroups";
import OnlineUsers from "./components/OnlineUsers";
import AvailableGroups from "./components/AvailableGroups";
import PersistLogin from "./features/auth/PersistLogin";
import Conversations from "./components/Conversations";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Public />} />
        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>

            <Route path="/" element={<Home />}>
              <Route path="home" element={<Welcome />} />
              <Route path="chat/:id" element={<ChatArea />} />
              <Route path="addGroupe" element={<CreateGroups />} />
              <Route path="users" element={<OnlineUsers />} />
              <Route path="groups" element={<AvailableGroups />} />
              <Route path="conversations" element={<Conversations />} />

            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

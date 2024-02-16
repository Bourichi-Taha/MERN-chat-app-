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
import Chatbot from "./pages/Chatbot";
import AddFriends from "./components/AddFriends";
import Requests from "./components/Requests";
import Profile from "./components/Profile";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route index element={<Public />} />
        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>

            <Route path="/" element={<Home  />}>
              <Route path="home" element={<Welcome />} />
              <Route path="chat/:id" element={<ChatArea />} />
              <Route path="addGroupe" element={<CreateGroups />} />
              <Route path="users" element={<OnlineUsers />} />
              <Route path="requests" element={<Requests />} />
              <Route path="look-users" element={<AddFriends />} />
              <Route path="groups" element={<AvailableGroups />} />
              <Route path="conversations" element={<Conversations  />} />
              <Route path="profile" element={<Profile />} />

            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

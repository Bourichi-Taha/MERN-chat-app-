import {  Outlet } from 'react-router-dom';
import "../assets/css/style.css"
import Sidebar from '../components/Sidebar';
import { useChatQuery } from '../features/auth/authApiSlice';

const Home = () => {

    const { data } = useChatQuery();
    console.log(data)
  return (
    <div className='home-container'>
      
      <Sidebar />
      
      <Outlet/>
    </div>
  )
}

export default Home
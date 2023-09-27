import {  Outlet } from 'react-router-dom';
import "../assets/css/style.css"
import Sidebar from '../components/Sidebar';

const Home = () => {

  return (
    <div className='home-container'>
      
      <Sidebar />
      
      <Outlet/>
    </div>
  )
}

export default Home
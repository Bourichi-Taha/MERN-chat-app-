import {  Outlet } from 'react-router-dom';
import "../assets/css/style.css"
import Sidebar from '../components/Sidebar';
import { useGetChatsQuery } from '../features/chat/chatApiSlice';

const Home = () => {

    const { data,isLoading } = useGetChatsQuery();

  return (
    <div className='home-container'>
      
      {!isLoading && <Sidebar chats={data} /> }
      
      <Outlet/>
    </div>
  )
}

export default Home
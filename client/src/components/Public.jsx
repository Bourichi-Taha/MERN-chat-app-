import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import messsageChat from "../assets/images/Message-Chat.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
const Public = () => {
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery('(max-width:767px)');
    console.log(matches)
    return (
        <section className="h-screen w-screen bg-gradient-to-t from-[#4b0082] to-[rgb(30 27 75)]">
            <header className="bg-white">
                <nav className='flex justify-between items-center w-[92%] mx-auto'>
                    <div>
                        <img className="w-16 mt-2" src={logo} alt="" />
                    </div>
                    <div className={"duration-500 md:static md:min-h-fit md:w-auto absolute bg-white min-h-[40vh] left-0  w-full flex items-center  px-5" + (isOpen ? " top-[9%]" : " top-[-100%]")}>
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                            <li>
                                <a className='hover:text-gray-500' href="http://">Developer</a>
                            </li>
                            <li>
                                <a className='hover:text-gray-500' href="http://">LinkedIn</a>

                            </li>
                            <li>
                                <a className='hover:text-gray-500' href="http://">GitHub</a>

                            </li>
                            <li>
                                <a className='hover:text-gray-500' href="http://">About</a>

                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign In</button>
                        {isOpen ? <CloseIcon sx={{ cursor: 'pointer', fontSize: '26px', display: matches ? 'block' : 'none' }} onClick={() => setIsOpen(false)} /> : <MenuIcon sx={{ cursor: 'pointer', fontSize: '26px', display: matches ? 'block' : 'none' }} onClick={() => setIsOpen(true)} />}
                    </div>
                </nav>
            </header>
            <main className="md:h-[80%] w-[92%] mx-auto md:flex justify-between items-center ">
                <div className="md:mt-[80px] mt-[20px]">
                    <h1 className={matches ? "text-6xl text-center font-mono font-bold mb-[10px] tracking-widest" : "md:max-2xl:text-8xl font-mono font-bold mb-[30px] md:tracking-widest md:max-xl:tracking-wide text-9xl md:max-lg:text-6xl "}>HAVE YOUR</h1>
                    <h1 className={matches ? "text-6xl text-center font-mono font-bold mb-[10px] tracking-widest" : "md:max-2xl:text-8xl font-mono font-bold mb-[30px] md:tracking-widest md:max-xl:tracking-wide text-9xl md:max-lg:text-6xl "}>BEST CHAT</h1>
                    <p className={matches ? "text-center mt-[10px] text-2xl font-mono" : "ml-[10px] mt-[20px] text-2xl font-mono"}>Fast, easy and unlimited chat.</p>
                    <div className="flex items-center m-[20px]">
                        <Link to={"login"}><button className='bg-[#a6c1ee] text-2xl text-white px-10 py-5 rounded-full hover:bg-[#87acec] mr-[20px] md:mr-[50px] md:text-3xl'>Join Us Now</button></Link>
                        <Link to={"register"}><button className='bg-[#a6c1ee] text-2xl text-white px-10 py-5 rounded-full hover:bg-[#87acec] md:text-3xl'>Login To Your Account</button></Link>
                    </div>
                </div>
                <div className=" h-full  flex items-center justify-center">
                    <img className='h-[60%] ' src={messsageChat} alt="" />
                </div>
            </main>
        </section>
    )
}

export default Public
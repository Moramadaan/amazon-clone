import React, { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNav from './SideNav';




const NavBottom = () => {
    const ref=useRef();
    const [sidebar, setSidebar]= useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
           if(e.target.contains(ref.current)){
            setSidebar(false)
           }
        })
    },[ref,sidebar])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
        
        <ul className='flex items-center gap-3 text-sm tracking-wide'>
            <li onClick={()=>setSidebar(true)} className='navHover flex items-center gap-1'><MenuIcon />All</li>
            <li className='navHover'>Medical Care</li>
            <li className='navHover'>Groceries</li>
            <li className='navHover'>Best Selles</li>
            <li className='navHover'>Amazon Basics</li>
            <li className='navHover'>Today's Deals</li>
            <li className='navHover'>Prime</li>
            <li className='navHover'>Registry</li>
            <li className='navHover'>Music</li>
            <li className='navHover'>Customer Service</li>
            <li className='navHover'>Books</li>
            <li className='navHover'>Pharmacy</li>
            <li className='navHover'>Amazon Home</li>
            <li className='navHover'>Fasion</li>
        </ul>

        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[360px] h-full bg-white border border-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                <AccountCircleIcon />
                                <h2 className='font-titlefont font-bold text-lg tracking-wide'>Hello, sign in</h2>

                            </div>
                            <SideNav 
                              title='Digital Content & Devices'
                              one='Amazon Lune-Cloud Gaming'
                              two='Prime vides'
                              three='Echo & Alexa'
                              four='Fire Tablests'
                              
                            />
                            <SideNav 
                                title='Shop by Department'
                                one='Clothing,Shoes,Jewlery & Watches'
                                two='Amazon Fresh'
                                three='Books'
                                four='movies,Musics & Games'                
                            />
                            <SideNav 
                              title='Programs & Features'
                              one='Whole Foods Market'
                              two='Medical Care & Pharmacy'
                              three='Amazon Physical Stores'
                              four='Subscribe & Save'
                              
                            />
                            <span onClick={()=>setSidebar(false)} className='flex items-center justify-center  bg-opacity-50 cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-white  duration-300'>
                               <CloseIcon />
                            </span>
                        </motion.div>
                        
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default NavBottom
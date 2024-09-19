import React from 'react'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LiaSignInAltSolid } from "react-icons/lia";

import { BsMinecart } from "react-icons/bs";



const Header = () => {
    
    const[toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false)
    }


  return (
    <>
    <div className=' black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1:0,
        visibility: toggle ? "visible":"hidden"
    }}>
        <div className=' w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{
            left: toggle? "0%":"-100%"
        }}
        >

        </div>
    </div>
      <header className='p-[15px] shadow-xl w-full'>
        <div className=' max-w-[1200px] mx-auto border flex items-center pr-2 py-2'>
            <div className=' w-[100px] border'>
            <img src='images/swiggylogo.png' className='w-full' alt='logoImg'/>
            </div>
            <div className=''>
                <span className=' font-bold border-b-2 text-[#3d4152] overflow-hidden relative'>Gajuwaka</span> Vizag, Andhrapradesh, India
                 <RxCaretDown onClick={showSideMenu} className = "inline text-[#ff5200] cursor-pointer"/>
            </div>
            <nav className=' flex gap-5 ml-auto list-none font-semibold text-[18px] cursor-pointer'>
                
                <li className=' text-[#3d4152] flex items-center gap-2'> 
                    Swiggy Corporate</li>    
                <li className=' text-[#3d4152] flex items-center gap-2' >
                <IoSearch className=' inline' />
                    Search</li>
                <li className=' text-[#3d4152] flex items-center gap-2'>
                <RiDiscountPercentLine className = "inline" />
                    Offers</li>
                <li className=' text-[#3d4152]'>Help</li>
                <li className=' text-[#3d4152] flex items-center gap-2'>
                <LiaSignInAltSolid className = "inline" />
                    SignIn</li>
                <li className=' text-[#3d4152] flex items-center gap-2'>
                <BsMinecart className = "inline" />
                    Cart</li>
                
            </nav>
        </div>
    </header>
    
       </> 
  )
}

export default Header
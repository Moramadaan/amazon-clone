import React, { useState } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Logo} from "../../assets/index";
import {allItems} from "../../constants/constant";
import NavBottom from "./NavBottom";
const NavBar = () => {
    const [showAll, setShowAll]=useState(false)
    
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-textWhite px-4 py-3 flex items-center gap-4">
        
        {/*===== logo  =====*/}
        <div className="navHover">
          <img className="w-24 mt-2" src={Logo} alt="logo" />
        </div> 

        {/*===== deliver  =====*/}
        <div className="navHover">
          <PlaceIcon />
          <p className="text-sm text-textLight font-light flex flex-col">Deliver to 
            <span className="text-sm text-textWhite font-semibold">Chicago</span>
          </p>
        </div>

        {/*===== search bar =====*/}
        <div className="h-10 rounded-md flex flex-grow relative">
          <span onClick={() =>setShowAll(!showAll)} className=" w-12 h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 duration-300 text-amazon_blue cursor-pointer rounded-l-md ">All<span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {
            showAll && (
              <div>
                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white boder-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                  {
                    allItems.map((item)=>(
                      <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                       key={item._id}>{item.title}
                      </li>
                    ))
                  }
                  </ul>
              </div>
            )
           } 

          <input className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" type="text" placeholder="Search Amazon" />
          <span className=" w-12 h-full flex items-center justify-center bg-amazon_yelow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-r-md">
            <SearchIcon />
          </span>
        </div>

            {/*===== singin bar =====*/}
        <div className="flex flex-col items-start justify-center navHover">
          <p className="text-xs text-textLight font-light">Hello, sing in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">Account & Lists {""} 
            <span><ArrowDropDownOutlinedIcon /></span>
          </p>
        </div>

         {/*===== singin bar =====*/}
        <div className="flex flex-col items-start justify-center navHover">
          <p className="text-xs text-textLight font-light">Return</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>

          {/*===== cart bar =====*/}
        <div className="flex items-start justify-center navHover relative" >
          <ShoppingCartOutlinedIcon />
          <p className="text-sm font-semibold -mt-1 text-whiteText pt-4">
            Cart <span className=" absolute text-xs top-0 left-4 font-bold text-[#f3a847] felx justify-center items-center">0</span>
          </p>
        </div>

      </div>
      
      <NavBottom />

    </div>
  );
}

export default NavBar;

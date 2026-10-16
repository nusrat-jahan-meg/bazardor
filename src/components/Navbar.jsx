import {  ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const banglaDate = new Intl.DateTimeFormat("bn-BD", {
        dateStyle : "full",
        timeZone: "Asia/Dhaka",

    }).format(new Date());

 const [categories ,setCategories] =useState([]);
 useEffect (()=> {
    fetch("http://localhost:5000/api/categories")
    .then((res)=> res.json())
    .then((data)=>{
    //    console.log("category",data);
       setCategories(data.data)
    })
   
 })







    return (
        <div>
            <div>
               
             <header className="   ">
                <nav className="flex   mx-auto p-10 justify-between   ">
               <div className=" flex  items-center   justify-between  ">
                  <ShoppingCart size={36} className="bg-green-600 rounded-xl items-center text-white justify-center flex h-10 w-10  "/>
                 <div className="p-3">
                     <span className="font-bold p-1 ">বাজার দর</span>
                     <p className="text-sm text-gray-500">{banglaDate}</p>
                   
                   
                 </div>
           
               </div>
                  <div className="flex p-6  gap-5">
                 <button className="btn btn-info">সাইন ইন</button>
                 <button className="bg-white btn text-black btn-accent">সাইন আপ</button>
                </div>
                </nav>
              
             </header>
              <div>
                    <div className="flex justify-around">
                    {
                     categories.map((category)=> (
                        <NavLink to={`/category/${category.id}`} key={category.id || category.nameBn}  onClick={()=>setCategories(category.id)}  
                        className={({isActive})=> {
                            isActive? "text-purple-600 font-bold px-3 py-1 bg-purple-50 rounded" 
              : "text-gray-700 px-3 py-1 hover:text-purple-600"
                        }}
                        >
                            {category.icon} {category.nameBn}
                       
                        </NavLink>
                     )
                    
                     )  
                    }
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
              </div>
            </div>
        </div>
    );
};

export default Navbar;
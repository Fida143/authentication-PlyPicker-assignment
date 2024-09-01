
"use client"
// components/Navbar.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter,usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    const router = useRouter();
    let  pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  useEffect(()=>{

    if(pathname !== '/login' &&  pathname !=='/register'  ){
      setIsLoggedIn(true)
      setShowDropdown(false)
    }else{
      setIsLoggedIn(false)
    }
  },[pathname])

  const handleLogout = async () =>{
    alert('hi')
    try {
      const res = await axios.get('/api/users/logout');
      console.log(res,'res')
      if(res.data.success) setIsLoggedIn(false);
      else setIsLoggedIn(true)
      router.push('/login');
      toast.success(res.data.message);
    } catch (error:any) {
      toast.error(error.response.data.message)
    }
  }


  
 
 

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Ply Picker</Link>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              {/* <img
                src="/path/to/avatar.jpg"
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              /> */}
              <RxAvatar className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}/>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="text-white px-4 py-2 rounded bg-green-600 hover:bg-green-700">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

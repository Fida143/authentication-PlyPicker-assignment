"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {useRouter} from 'next/navigation'

const RegisterPage = () => {
    const router = useRouter();
    let initialData = {
        email:"",
        password:"",
        role: ""
    }
    const [user, setUser] = useState(initialData);
  
    const handleSubmit  = async (e: React.FormEvent) => {
      e.preventDefault();
     
      try {
        const res = await axios.post("/api/users/register",user)
        console.log(res)
        router.push("/login");
        toast.success(res.data.message)
      } catch (error:any) {
        console.log(error)
        toast.error(error.response.data.message)
      }
      setUser(initialData)
    };
  return (
    <div className='h-screen w-screen flex justify-center items-center'>


    <div className=" max-w-md w-[400px] mx-auto p-8 border border-gray-300 rounded-lg bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name='email'
            value={user.email}
            onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
            className="mt-1 p-2 w-full border border-gray-600 rounded bg-gray-800 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            name='password'
            value={user.password}
            onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
            className="mt-1 p-2 w-full border border-gray-600 rounded bg-gray-800 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Role</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value='admin'
              onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
              className="form-radio text-blue-600"
              checked={user.role  == "admin"}
              required
            />
            <span className="ml-2">Admin</span>
          </label>
          <br />
          <label className="inline-flex items-center mt-2">
            <input
              type="radio"
              name="role"
              value='team-member'
              onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}
              className="form-radio text-blue-600"
              checked= {user.role == 'team-member'}
            />
            <span className="ml-2">Team Member</span>
          </label>
        </div>

        <button
          type="submit"
          className={`${(user.email.length && user.password.length ) ? 'bg-blue-600 hover:bg-blue-700' : 'cursor-not-allowed  bg-gray-400 hover:bg-gray-400'}  w-full py-2 px-4  text-white font-semibold rounded`}
    
        >
          Register
        </button>
        <p className='mt-4'>Already have an account ? <Link href={'/login'} className='text-blue-600 font-semibold'>Login</Link></p>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage

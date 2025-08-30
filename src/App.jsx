import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const [isLogin, setIsLogin] = useState(true)

  const toggle = () => {
    setIsLogin(!isLogin)
    console.log('isLogin:', isLogin)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        {isLogin ? (
          <>

            <h2 className='flex justify-center align-middle text-2xl text-blue-600 my-2 font-extrabold'>Welcome to this project</h2>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <span onClick={toggle} className="text-blue-600 hover:underline cursor-pointer">
                Sign Up
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <span onClick={toggle} className="text-blue-600 hover:underline cursor-pointer">
                Sign In
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default App

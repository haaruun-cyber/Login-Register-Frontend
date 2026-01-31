import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Component/Header';
import { Toaster } from 'react-hot-toast';
import {jwtDecode} from 'jwt-decode';

const Home = () => {
  const [userdata, setUserdata] = useState({});
  // const [loading, setLoading] = useState(true);
  // console.log(userdata)
  const navigate = useNavigate();

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/login');
    }
  }

  useEffect(() => {
    checkAuth();
    userdatafromtoken();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const userdatafromtoken = () => {
    //decode token and get user data
    const token = localStorage.getItem('token');
    if(token){
      const data = jwtDecode(token);
      // console.log(userdata);
      setUserdata(data);
    }
  };


  return (
    <>
    <div className="min-h-screen">
      <Toaster/>
      <Header/>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to the Home Page!
        </h1>
        <p className="text-center text-gray-600 mb-12">
          This is a simple home page after successful login.
        </p>
        {/* name and Email of the user */}
        <div>
          <p className="text-center text-gray-800 mb-4">Fisrt Name: {userdata.firstname}</p>
          <p className="text-center text-gray-800 mb-4">Last Name: {userdata.lastname}</p>
          <p className="text-center text-gray-800 mb-4">Email:  {userdata.email}</p>
        </div>

        <div className="flex justify-center">
          <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>

    </div>
      </>
  )
}

export default Home
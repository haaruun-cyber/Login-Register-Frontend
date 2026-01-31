import axios from 'axios';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();

  useEffect(() => {
    auth();
  }, []);

  const handledata = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_API_URL + '/user/login';
      const { data } = await axios.post(url, formData);
      // console.log(data);
      if(data.status == true){
        setTimeout(() => {
          navigate('/home');
        }, 3000);
        toast.success(data.message);
        localStorage.setItem('token',data.token);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const auth = async()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate('/home');
    }
  };
  // auth();

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <Toaster/>
    <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-8" onSubmit={(e) => handlesubmit(e)}>
      <div className="flex flex-col items-center justify-center px-10 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Welcome Back!
            </p>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="john@example.com"
              id="email"
              name='email'
              type="email"
              onChange={handledata} />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" 
              placeholder="••••••••" 
              id="password" 
              name='password'
              type="password" 
              onChange={handledata} />
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white" type="submit">
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 px-3">
              Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
      </form>
        </div>
    </>
  );
}

export default Login;

import React from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();
  const handlechange = (e) => {
    // Handle input change
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
    // console.log(formData)

  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_API_URL + '/user';
      const { data } = await axios.post(url, formData);
      // console.log(data);
      if(data.status == true){
        toast.success(data.message);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Toaster/>
    <div className='flex justify-center items-center h-screen'>
    <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-8" onSubmit={(e) => handlesubmit(e)}>
      <div className="flex flex-col items-center justify-center px-10 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Firstname
              </label>
              <input
              name='firstname'
              id='firstname'
              onChange={handlechange}
              placeholder="John" 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" type="text" 
              />
            </div>
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Lastname
              </label>
              <input name='lastname' id='lastname' onChange={handlechange} placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" type="text" />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input name='email' id='email' onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="john@example.com" type="email" />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input name='password' id='password' onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" type="password" />
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white" type="submit">
              Create an account
            </button>
              <p className="text-sm font-light text-gray-500 px-3">
             have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in here</a>
            </p>
          </div>
        </div>
      </div></form>
        </div>
    </>
  );
}

export default Signup;

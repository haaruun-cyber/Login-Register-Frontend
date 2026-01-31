import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userdata, setUserdata] = useState({});


   useEffect(() => {
      userdatafromtoken();
    }, []);

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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Icon */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-rocket text-blue-600 text-2xl"></i>
            <a href="#" className="text-xl font-bold text-gray-800">
              Login<span className="text-blue-600">Register</span>
            </a>
          </div>

        

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <i className="fas fa-paper-plane"></i>
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
           
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {
                // user data
                userdata && (
                  <div className="px-3 py-2">
                    <p className="text-gray-800 font-medium">Hello, {userdata.firstname}</p>
                    <p className="text-gray-600 text-sm">{userdata.email}</p>
                  </div>
                )

              }
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
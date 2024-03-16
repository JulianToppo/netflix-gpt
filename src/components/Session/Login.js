import React from 'react';
import Header from './Header';
import SessionForm from './SessionForm';

const Login = () => {
  return (
    <div className="flex-col justify-center items-center w-full h-screen ">
      {/* Header */}
      <div className='relative'>
        <Header />
      </div>

      {/* Background Image */}
      <div className="z-0 inset-0 absolute brightness-50 ">
        <img
         className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>

      {/* Session Form */}
      <div className="z-30 relative  mt-16 md:mt-0">
        <SessionForm />
      </div>
    </div>
  );
};

export default Login;

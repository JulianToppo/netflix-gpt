import React from "react";
import Header from "./Header";
import SessionForm from "./SessionForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-start items-center  min-h-screen bg-cover w-full" style={{backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg')"}}>
      {/* Header */}
      <div className="relative flex-col justify-center items-center">
        <Header />
        {/* Session Form */}
        <SessionForm />
      </div>
      {/* Background Image */}
      {/* <div className="z-0 inset-0 h-screen absolute brightness-50">
        <img
          className="w-full h-full object-cover sm:object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div> */}
    </div>
  );
};

export default Login;

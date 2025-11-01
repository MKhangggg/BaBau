import React from "react";
import LoginForm from '@/components/LoginForm';
import NotificationPanel from '@/components/NotificationPannel';

const Login = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-white to-sky-50">
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>

      <div className="w-1/2 bg-sky-100 flex flex-col h-screen">
        <NotificationPanel />
      </div>
    </div>
  );
};

export default Login;

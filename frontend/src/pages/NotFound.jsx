import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50 text-center">

      <img
        src="404_NotFound.png"
        alt="not found"
        className="w-[480px] max-w-full mb-6"
      />

      <p className="text-gray-700 text-lg font-medium mb-6">
        Bạn đi vào vùng cấm địa, mời nâng cấp tu vi mới vào được!!!!
      </p>

      <a
        href="/"
        className="inline-block px-6 py-3 font-medium text-white bg-sky-500 rounded-2xl shadow-md bg-primary hover:bg-primary-dark transition"
      >
        Quay về trang đăng nhập
      </a>
    </div>
  );
};

export default NotFound;

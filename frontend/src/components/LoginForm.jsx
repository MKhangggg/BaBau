import React from "react";

const LoginForm = () => {
  return (
    <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10">
      {/* Logo + Tiêu đề */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-28 h-28 rounded-full border-4 border-sky-300 flex items-center justify-center shadow-sm">
          <span className="text-6xl text-red-500 font-bold">＋</span>
        </div>
        <p className="text-gray-500 mt-4 text-base">Hôm nay bạn thế nào?</p>
        <h2 className="text-3xl font-bold mt-2">
          Vui lòng <span className="text-sky-600">Đăng nhập</span>
        </h2>
      </div>

      {/* Form đăng nhập */}
      <form className="space-y-5">
         <input
            type="text"
            placeholder="Tên tài khoản"
            className="w-full border rounded-lg p-3 text-base focus:outline-sky-400"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full border rounded-lg p-3 text-base focus:outline-sky-400"
          />

        <div className="flex justify-between text-sm">
          <a href="#" className="text-sky-600 hover:underline">
            Đăng ký tài khoản
          </a>
          <a href="#" className="text-sky-600 hover:underline">
            Quên mật khẩu?
          </a>
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium">
            Ngôn ngữ / Language
          </label>
          <select className="w-full border rounded-lg p-3 text-base">
            <option>Tiếng Việt (Vietnamese)</option>
            <option>English</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold py-3 rounded-lg text-lg hover:opacity-90 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

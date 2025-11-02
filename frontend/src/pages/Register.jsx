import React from "react";

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl overflow-hidden">
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/image.jpg')", //link ảnh
          }}
        ></div>

        <div className="bg-sky-50 px-20 py-10">
          <p className="text-gray-600 text-center">Hôm nay bạn thế nào?</p>
          <h2 className="text-3xl font-bold text-center mt-1 mb-10">
            Vui lòng <span className="text-sky-600">Đăng Ký</span>
          </h2>

          <form className="grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Tên tài khoản (Mã NV) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập mã nhân viên..."
                className="border rounded-lg p-3 text-base focus:outline-sky-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="border rounded-lg p-3 text-base focus:outline-sky-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="border rounded-lg p-3 text-base focus:outline-sky-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Vai trò (Bác sĩ, điều dưỡng...) <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-lg p-3 text-base focus:outline-sky-400">
                <option value="">-- Chọn vai trò --</option>
                <option value="doctor">Bác sĩ</option>
                <option value="nurse">Điều dưỡng</option>
                <option value="staff">Nhân viên tiếp đón</option>
                <option value="patient">Bệnh nhân</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Xác nhận mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="border rounded-lg p-3 text-base focus:outline-sky-400"
              />
            </div>

            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition text-lg"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

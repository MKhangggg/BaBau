import React, { useEffect, useState } from "react";
import axios from "axios";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/tasks")
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      {/* Tiêu đề */}
      <h2 className="text-center text-sky-700 text-xl font-bold pt-10 pb-4">
        THÔNG BÁO HẰNG NGÀY
      </h2>

      {/* Khung cuộn riêng */}
      <div className="flex-1 bg-sky-50 rounded-t-2xl shadow-inner p-4 overflow-y-auto space-y-3">
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Chưa có thông báo nào
          </p>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-3 flex flex-col hover:bg-sky-100 cursor-pointer transition"
              onClick={() => alert(item.content)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{item.title}</span>
                <span className="text-sky-500 font-bold">&gt;</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{item.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;

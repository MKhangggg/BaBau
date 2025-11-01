import express from "express";
const router = express.Router();

// ✅ Dữ liệu mẫu — tạm dùng list thông báo
const list = [
  {
    id: 1,
    title: "Thứ 2, ngày 08 tháng 09 năm 2025",
    content: "Bệnh viện triển khai chương trình khám miễn phí cho trẻ em dưới 6 tuổi."
  },
  {
    id: 2,
    title: "Thứ 3, ngày 09 tháng 09 năm 2025",
    content: "Các bác sĩ sẽ tham gia hội nghị chuyên khoa tại Hà Nội."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 4,
    title: "Thứ 5, ngày 11 tháng 09 năm 2025",
    content: "Cập nhật phần mềm quản lý bệnh án phiên bản mới."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
  {
    id: 3,
    title: "Thứ 4, ngày 10 tháng 09 năm 2025",
    content: "Phòng xét nghiệm tạm ngưng hoạt động từ 13h đến 15h để bảo trì thiết bị."
  },
];

// ✅ Route trả về danh sách thông báo
router.get("/", (req, res) => {
  res.json(list);
});

export default router;

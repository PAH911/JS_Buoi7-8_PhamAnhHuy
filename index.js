// Add event chuyển tab giữa các bài
function changeContent(bai) {
  const content1 = document.getElementById("content_1");
  const content2 = document.getElementById("content_2");
  const content3 = document.getElementById("content_3");
  const content4 = document.getElementById("content_4");
  const content5 = document.getElementById("content_5");

  if (bai === "Bai1") {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai2") {
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai3") {
    content3.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai4") {
    content4.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content5.style.display = "none";
  }
}

// Bài 1:  Quản lý tuyển sinh
// Hàm chọn khu vực
let chonKhuVuc = () => {
  let khuVucA = document.getElementById("khuVucA").checked;
  let khuVucB = document.getElementById("khuVucB").checked;
  let khuVucC = document.getElementById("khuVucC").checked;
  let khuVuc = "";
  if (khuVucA) {
    khuVuc = "A";
  } else if (khuVucB) {
    khuVuc = "B";
  } else if (khuVucC) {
    khuVuc = "C";
  }
  return khuVuc;
};

// Vì thuộc tính .checked chỉ dùng cho input type="radio" nên phải viết hàm chonDoiTuong như sau để lấy giá trị của select
let chonDoiTuong = () => {
  let doiTuong = document.getElementById("doiTuong").value;
  return doiTuong.replace("doiTuong", "");
};

// Xử lý sự kiện cho button tính điểm
function tinhDiem() {
  // input
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = chonKhuVuc();
  let diemkhuVuc = 0;
  let doiTuong = chonDoiTuong();
  let diemDoiTuong = 0;
  let TongDiem = 0;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;

  // progress
  // Xác định điểm khu vực
  switch (khuVuc) {
    case "A":
      diemkhuVuc = 2;
      break;
    case "B":
      diemkhuVuc = 1;
      break;
    case "C":
      diemkhuVuc = 0.5;
      break;
    default:
      diemkhuVuc = 0;
  }

  // Xác định điểm đối tượng
  switch (doiTuong) {
    case "0":
      diemDoiTuong = 0;
      break;
    case "1":
      diemDoiTuong = 2.5;
      break;
    case "2":
      diemDoiTuong = 1.5;
      break;
    case "3":
      diemDoiTuong = 1;
      break;
  }

  // Kiểm tra đầu vào

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    alert("Vui lòng nhập điểm môn học");
    return;
  } else if (diemChuan === 0) {
    alert("Vui lòng nhập điểm chuẩn");
    return;
  } else if (diemChuan < 0 || diemChuan > 30) {
    alert("Vui lòng nhập điểm chuẩn từ 1 đến 30");
    return;
  } else if (diemMon1 < 0 || diemMon2 < 0 || diemMon3 < 0) {
    alert("Vui lòng nhập điểm môn học từ 0 đến 10");
    return;
  }

  // Tính tổng điểm
  TongDiem = diemkhuVuc + diemDoiTuong + diemMon1 + diemMon2 + diemMon3;

  // Kiểm tra đậu rớt
  let ketQua = "";
  if (TongDiem >= diemChuan) {
    ketQua =
      "Chúc mừng bạn đã đậu! Tổng điểm của bạn là: " +
      TongDiem.toLocaleString();
  } else if (TongDiem < diemChuan && TongDiem > 0) {
    ketQua =
      "Rất tiếc! Bạn đã rớt! Tổng điểm của bạn là: " +
      TongDiem.toLocaleString();
  }

  // output
  document.getElementById("tongDiem").innerHTML = ketQua;
}

// Hàm reset giá trị cho button reset
function resetForm1() {
  document.getElementById("diemChuan").value = "";
  document.getElementById("khuVucA").checked = false;
  document.getElementById("khuVucB").checked = false;
  document.getElementById("khuVucC").checked = false;
  document.getElementById("doiTuong").value = "doiTuong0";
  document.getElementById("diemMon1").value = "";
  document.getElementById("diemMon2").value = "";
  document.getElementById("diemMon3").value = "";
  document.getElementById("tongDiem").innerHTML = "";
}

// Bài 2: Tính tiền điện
document.getElementById("btnTinhTienDien").onclick = function () {
  // input
  let giaTien50kwDau = 500;
  let giaTien50kwKe = 650;
  let giaTien100kwKe = 850;
  let giaTien150kwKe = 1100;
  let giaTien350kwTroDi = 1300;
  let soKW = document.getElementById("soKW").value * 1;
  let hoTen = document.getElementById("hoTen").value;
  let tongTien = 0;

  // progress
  // Kiểm tra đầu vào
  if (soKW <= 0) {
    alert("Vui lòng nhập số KW điện");
    return;
  } else if (hoTen === "") {
    alert("Vui lòng nhập họ tên");
    return;
  }
  // Tính tiền điện
  if (soKW <= 50) {
    tongTien = soKW * giaTien50kwDau;
  } else if (soKW > 50 && soKW <= 100) {
    tongTien = 50 * giaTien50kwDau + (soKW - 50) * giaTien50kwKe;
  } else if (soKW > 100 && soKW <= 200) {
    tongTien =
      50 * giaTien50kwDau + 50 * giaTien50kwKe + (soKW - 100) * giaTien100kwKe;
  } else if (soKW > 200 && soKW <= 350) {
    tongTien =
      50 * giaTien50kwDau +
      50 * giaTien50kwKe +
      100 * giaTien100kwKe +
      (soKW - 200) * giaTien150kwKe;
  } else if (soKW > 350) {
    tongTien =
      50 * giaTien50kwDau +
      50 * giaTien50kwKe +
      100 * giaTien100kwKe +
      150 * giaTien150kwKe +
      (soKW - 350) * giaTien350kwTroDi;
  }

  //   output
  document.getElementById("tienDien").innerHTML =
    "Khách hàng: " +
    hoTen +
    "; Tổng tiền điện của bạn là: " +
    new Intl.NumberFormat().format(tongTien) +
    " đ";
};

// Hàm reset giá trị cho button reset
function resetForm2() {
  document.getElementById("hoTen").value = "";
  document.getElementById("soKW").value = "";
  document.getElementById("tienDien").innerHTML = "";
}

// Bài 3: Tính thuế thu nhập cá nhân
function tinhTienThue() {
  // input
  let nguoiDongThue = document.getElementById("nguoiDongThue").value;
  let tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  let tienThue = 0;
  let thuNhapChiuThue = 0;

  // progress
  // Kiểm tra đầu vào
  if (tongThuNhapNam <= 5600000 || tongThuNhapNam === "") {
    alert("Vui lòng nhập tổng thu nhập năm hợp lệ");
    return;
  } else if (nguoiDongThue === "") {
    alert("Vui lòng nhập họ tên");
    return;
  } else if (soNguoiPhuThuoc === "" || soNguoiPhuThuoc < 0) {
    alert("Vui lòng nhập số người phụ thuộc hợp lệ");
    return;
  }
  // Tính thuế
  thuNhapChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
  if (thuNhapChiuThue <= 60e6) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120e6) {
    tienThue = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
  } else if (thuNhapChiuThue <= 210e6) {
    tienThue = 60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue - 120e6) * 0.15;
  } else if (thuNhapChiuThue <= 384e6) {
    tienThue =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapChiuThue - 210e6) * 0.2;
  } else if (thuNhapChiuThue <= 624e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (thuNhapChiuThue - 384e6) * 0.25;
  } else if (thuNhapChiuThue <= 960e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (thuNhapChiuThue - 624e6) * 0.3;
  } else if (thuNhapChiuThue > 960e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (thuNhapChiuThue - 960e6) * 0.35;
  }
  // output
  document.getElementById("tienThue").innerHTML =
    "Khách hàng: " +
    nguoiDongThue +
    "; Số tiền thuế thu nhập cá nhân của bạn là: " +
    new Intl.NumberFormat().format(tienThue) +
    " đ";
}

// Hàm reset giá trị cho button reset
function resetForm3() {
  document.getElementById("nguoiDongThue").value = "";
  document.getElementById("tongThuNhapNam").value = "";
  document.getElementById("nguoiPhuThuoc").value = "";
  document.getElementById("tienThue").innerHTML = "";
}

// Bài 4: Tính tiền cáp
// Xử lý sự kiện Onchange khi chọn loại khách hàng
function chonLoaiKhachHang() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoidiv = document.getElementById("soKetNoiDiv");
  if (loaiKhachHang === "doanhNghiep") {
    soKetNoidiv.style.display = "block";
  } else {
    soKetNoidiv.style.display = "none";
  }
}

// Xử lý sự kiện cho button tính tiền cáp
function tinhTienCap() {
  // input
  let maKH = document.getElementById("maKH").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let tienCap = 0;

  // progress
  // Kiểm tra đầu vào
  if (maKH === "") {
    alert("Vui lòng nhập mã khách hàng");
    return;
  } else if (soKenh <= 0 || soKenh === "") {
    alert("Vui lòng nhập số kênh hợp lệ");
    return;
  } else if (loaiKhachHang === "chonLoai") {
    alert("Vui lòng chọn loại khách hàng");
    return;
  } else if (loaiKhachHang === "doanhNghiep" && soKetNoi <= 0) {
    alert("Vui lòng nhập số kết nối");
    return;
  }

  switch (loaiKhachHang) {
    case "nhaDan": {
      let phiXuLyHoaDon = 4.5;
      let phiDichVu = 20.5;
      let phiThueKenh = 7.5;
      tienCap = phiXuLyHoaDon + phiDichVu + soKenh * phiThueKenh;
      break;
    }
    case "doanhNghiep": {
      phiXuLyHoaDon = 15;
      phiThueKenh = 50;
      phiDichVu = soKetNoi <= 10 ? 75 : 75 + (soKetNoi - 10) * 5;
      tienCap = phiXuLyHoaDon + phiDichVu + soKenh * phiThueKenh;
      break;
    }
    default:
      console.log("vui lòng chọn loại khách hàng");
      break;
  }
  // output
  document.getElementById("tienCap").innerHTML =
    "Mã khách hàng: " + maKH + "; Tiền cáp: $" + tienCap.toLocaleString();
}

// Hàm reset giá trị cho button reset
function resetForm4() {
  document.getElementById("maKH").value = "";
  document.getElementById("soKenh").value = "";
  document.getElementById("loaiKhachHang").value = "chonLoai";
  document.getElementById("soKetNoi").value = "";
  document.getElementById("tienCap").innerHTML = "";
  document.getElementById("soKetNoiDiv").style.display = "none";
}

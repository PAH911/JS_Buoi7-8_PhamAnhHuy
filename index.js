// Input
function layMang(input) {
  let mang;
  try {
    mang = input
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));
  } catch (error) {
    mang = [];
  }
  return mang;
}

function kiemTraMang(mang) {
  return Array.isArray(mang) && mang.length > 0;
}

// Process
function xuLyMang(chucNang, mang, viTri1 = null, viTri2 = null) {
  let ketQua = "";
  switch (chucNang) {
    case 1: {
      const tongSoDuong = mang
        .filter((n) => n > 0)
        .reduce((tong, so) => tong + so, 0);
      ketQua = `Tổng các số dương là: ${tongSoDuong}`;
      break;
    }
    case 2: {
      const soLuongSoDuong = mang.filter((n) => n > 0).length;
      ketQua = `Số lượng số dương là: ${soLuongSoDuong}`;
      break;
    }
    case 3: {
      const soNhoNhat = Math.min(...mang);
      ketQua = `Số nhỏ nhất trong mảng là: ${soNhoNhat}`;
      break;
    }
    case 4: {
      const soDuong = mang.filter((n) => n > 0);
      if (soDuong.length > 0) {
        ketQua = `Số dương nhỏ nhất là: ${Math.min(...soDuong)}`;
      } else {
        ketQua = "Không có số dương trong mảng";
      }
      break;
    }
    case 5: {
      const soChanCuoi = [...mang].reverse().find((n) => n % 2 === 0);
      ketQua =
        soChanCuoi !== undefined
          ? `Số chẵn cuối cùng là: ${soChanCuoi}`
          : "Không có số chẵn";
      break;
    }
    case 6: {
      if (
        viTri1 !== null &&
        viTri2 !== null &&
        viTri1 >= 0 &&
        viTri1 < mang.length &&
        viTri2 >= 0 &&
        viTri2 < mang.length
      ) {
        [mang[viTri1], mang[viTri2]] = [mang[viTri2], mang[viTri1]];
        ketQua = `Mảng sau khi đổi chỗ: ${mang.join(", ")}`;
      } else {
        ketQua = "Vị trí không hợp lệ";
      }
      break;
    }
    case 7: {
      ketQua = `Mảng sau khi sắp xếp tăng dần: ${[...mang]
        .sort((a, b) => a - b)
        .join(", ")}`;
      break;
    }
    case 8: {
      const soNguyenTo = mang.find(laSoNguyenTo);
      ketQua =
        soNguyenTo !== undefined
          ? `Số nguyên tố đầu tiên là: ${soNguyenTo}`
          : "Không có số nguyên tố";
      break;
    }
    case 9: {
      const soThuc = mang.filter((n) => !Number.isInteger(n)).length;
      ketQua = `Số lượng số thực là: ${soThuc}`;
      break;
    }
    case 10: {
      const soLuongDuong = mang.filter((n) => n > 0).length;
      const soLuongAm = mang.filter((n) => n < 0).length;
      if (soLuongDuong > soLuongAm) {
        ketQua = "Số lượng số dương nhiều hơn số âm";
      } else if (soLuongAm > soLuongDuong) {
        ketQua = "Số lượng số âm nhiều hơn số dương";
      } else {
        ketQua = "Số lượng số dương và số âm bằng nhau";
      }
      break;
    }
    default:
      ketQua = "Chức năng không hợp lệ";
  }
  return ketQua;
}

function laSoNguyenTo(so) {
  if (so <= 1) return false;
  for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) return false;
  }
  return true;
}

// Output
function hienThiKetQua(ketQua, phanTuHienThi) {
  phanTuHienThi.textContent = ketQua;
}

// Xử lý sự kiện
const nhapMangInput = document.getElementById("nhapMang");
const thongBaoLoi = document.getElementById("thongBaoLoi");
const ketQuaDiv = document.getElementById("ketQua");

const cacNut = document.querySelectorAll(".btn");
const nhapViTriDiv = document.getElementById("nhapViTri");
const nutDoiCho = document.getElementById("nutDoiCho");
const xacNhanDoiCho = document.getElementById("xacNhanDoiCho");
const viTri1Input = document.getElementById("viTri1");
const viTri2Input = document.getElementById("viTri2");

cacNut.forEach((btn, index) => {
  btn.classList.add(
    "bg-orange-400",
    "text-white",
    "p-2",
    "rounded",
    "shadow",
    "hover:bg-orange-600",
    "hover:shadow-lg",
    "transition-all",
    "duration-200"
  );

  btn.addEventListener("click", () => {
    const giaTriNhap = nhapMangInput.value;
    const mang = layMang(giaTriNhap);

    if (!kiemTraMang(mang)) {
      thongBaoLoi.classList.remove("hidden");
      return;
    }

    thongBaoLoi.classList.add("hidden");

    if (index + 1 === 6) {
      nhapViTriDiv.classList.remove("hidden");
    } else {
      nhapViTriDiv.classList.add("hidden");
      const ketQua = xuLyMang(index + 1, mang);
      hienThiKetQua(ketQua, ketQuaDiv);
    }
  });
});

xacNhanDoiCho.addEventListener("click", () => {
  const giaTriNhap = nhapMangInput.value;
  const mang = layMang(giaTriNhap);

  if (!kiemTraMang(mang)) {
    thongBaoLoi.classList.remove("hidden");
    return;
  }

  thongBaoLoi.classList.add("hidden");

  const viTri1 = parseInt(viTri1Input.value);
  const viTri2 = parseInt(viTri2Input.value);

  const ketQua = xuLyMang(6, mang, viTri1, viTri2);
  hienThiKetQua(ketQua, ketQuaDiv);
});

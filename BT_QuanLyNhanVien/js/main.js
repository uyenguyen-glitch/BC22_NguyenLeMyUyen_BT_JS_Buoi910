// Tạo đối tượng dsnv thuộc lớp DanhSachNhanVien
var dsnv = new DanhSachNhanVien();

// Lấy dữ liệu từ LocalStorage
getLocalStorage();

// Tạo hàm getEle
function getEle(id) {
  return document.getElementById(id);
}

// Lấy thông tin nhân viên
function layThongTinNhanVien() {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  // Tạo đối tượng validation
  var validation = new Validation();

  // Tạo flag
  var isValid = true;

  // Validation
  /**
   * Tài khoản
   */
  isValid &=
    validation.kiemTraRong(
      taiKhoan,
      "errorTK",
      "(*) Tài khoản không được để trống"
    ) &&
    validation.kiemTraDoDaiChuoi(
      taiKhoan,
      "errorTK",
      "(*) Tài khoản phải có từ 4-6 kí tự ",
      4,
      6
    );

  /**
   * Tên
   */
  isValid &=
    validation.kiemTraRong(hoTen, "errorName", "(*) Tên không được để trống") &&
    validation.kiemTraTenLaChu(hoTen, "errorName", "(*) Tên phải là chữ");

  /**
   * Email
   */
  isValid &=
    validation.kiemTraRong(
      email,
      "errorEmail",
      "(*) Email không được để trống"
    ) &&
    validation.kiemTraDinhDangEmail(
      email,
      "errorEmail",
      "(*) Email không đúng định dạng"
    );

  /**
   * Password
   */
  isValid &=
    validation.kiemTraRong(
      matKhau,
      "errorPassword",
      "(*) Mật khẩu không được để trống"
    ) &&
    validation.kiemTraDoDaiChuoi(
      matKhau,
      "errorPassword",
      "(*) Mật khẩu phải có từ 6-10 kí tự",
      6,
      10
    ) &&
    validation.kiemTraMatKhau(
      matKhau,
      "errorPassword",
      "(*) Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  /**
   * Date
   */
  isValid &=
    validation.kiemTraRong(
      ngayLam,
      "errorNgayLam",
      "(*) Ngày làm không được để trống"
    ) &&
    validation.kiemTraNgayLam(
      ngayLam,
      "errorNgayLam",
      "(*) Ngày làm không đúng định dạng"
    );

  /**
   * Lương cơ bản
   */
  isValid &=
    validation.kiemTraRong(
      luongCoBan,
      "errorLuongCb",
      "Lương không được để trống"
    ) &&
    validation.kiemTraDuLieuSo(
      luongCoBan,
      "errorLuongCb",
      "(*) Lương nhập phải là số"
    ) &&
    validation.kiemTraLuongCb(
      parseInt(luongCoBan),
      "errorLuongCb",
      "(*) Lương cơ bản phải nằm trong khoảng 1 000 000 - 20 000 000"
    );

  /**
   * Chức vụ
   */
  isValid &= validation.kiemTraChucVu(
    chucVu,
    "errorChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  /**
   * Kiểm tra giờ làm
   */
  isValid &=
    validation.kiemTraRong(
      gioLam,
      "errorGioLam",
      "(*) Giờ làm không được để trống"
    ) &&
    validation.kiemTraDuLieuSo(
      gioLam,
      "errorGioLam",
      "(*) Giờ làm phải là số"
    ) &&
    validation.kiemTraGioLam(
      gioLam,
      "errorGioLam",
      "(*) Giờ làm phải nằm trong khoảng 80 - 200 giờ"
    );

  // Check form
  if (!isValid) return null;

  // Tạo đối tượng nhân viên
  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );

  nhanVien.tinhLuong();
  nhanVien.xepLoaiNV();
  return nhanVien;
}

// Tạo bảng
function taoBang(dsnv) {
  var content = "";

  for (var i = 0; i < dsnv.length; i++) {
    var nhanvien = dsnv[i];
    var currentFormat = new Intl.NumberFormat("vn-VN");
    content += `<tr>
                    <td>${nhanvien.taiKhoan}</td>
                    <td>${nhanvien.hoTen}</td>
                    <td>${nhanvien.email}</td>
                    <td>${nhanvien.ngayLam}</td>
                    <td>${nhanvien.chucVu}</td>
                    <td>${currentFormat.format(nhanvien.tongLuong)}</td>
                    <td>${nhanvien.loaiNV}</td>
                    <td><button class='btn btn-danger' onclick="xoaNV('${
                      nhanvien.taiKhoan
                    }')">Xóa</button><button class='btn btn-info' data-toggle='modal' data-target='#myModal' onclick="suaNV('${
      nhanvien.taiKhoan
    }')">Sửa</button></td>
               </tr>`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

// Thêm nhân viên
getEle("btnThemNV").addEventListener("click", function () {
  var nhanvien = layThongTinNhanVien();
  if (nhanvien != null) {
    dsnv._themNhanVien(nhanvien);
    setLocalStorage();
    taoBang(dsnv.arr);
  }
});

// Xóa nhân viên
function xoaNV(taiKhoan) {
  dsnv._xoaNhanVien(taiKhoan);
  setLocalStorage();
  taoBang(dsnv.arr);
}

// Sửa nhân viên
function suaNV(taiKhoan) {
  var nhanVien = dsnv._suaNhanVien(taiKhoan);

  if (nhanVien != null) {
    getEle("tknv").value = nhanVien.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("btnThemNV").disabled = true;
    getEle("btnCapNhat").disabled = false;
    getEle("name").value = nhanVien.hoTen;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.matKhau;
    getEle("datepicker").value = nhanVien.ngayLam;
    getEle("luongCB").value = nhanVien.luongCoBan;
    getEle("chucvu").value = nhanVien.chucVu;
    getEle("gioLam").value = nhanVien.gioLam;
  }
}

// Cập nhật nhân viên
getEle("btnCapNhat").addEventListener("click", function () {
  var nhanvien = layThongTinNhanVien();
  if (nhanvien != null) {
    dsnv._capNhatNhanVien(nhanvien);
    setLocalStorage();
    taoBang(dsnv.arr);
  }
});

// Tìm kiếm nhân viên theo xếp loại
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv._timKiemNhanVien(keyword);

  taoBang(mangTimKiem);
});
/**
 * LocalStorage
 */

// Lưu xuống Storage
function setLocalStorage() {
  // Chuyển data từ JSON -> String
  var dataString = JSON.stringify(dsnv.arr);

  // Lưu xuống localstorage
  localStorage.setItem("DSNV", dataString);
}

// Lấy lên từ Storage
function getLocalStorage() {
  var data = localStorage.getItem("DSNV");
  if (data) {
    dataJSON = JSON.parse(data);
    dsnv.arr = dataJSON;
    taoBang(dsnv.arr);
  }
}

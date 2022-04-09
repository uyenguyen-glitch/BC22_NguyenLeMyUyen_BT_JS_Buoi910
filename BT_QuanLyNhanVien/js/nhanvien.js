function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.loaiNV = "";
  this.tongLuong = 0;

  this.tinhLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        this.tongLuong = parseInt(this.luongCoBan) * 3;
        break;
      case "Trưởng phòng":
        this.tongLuong = parseInt(this.luongCoBan) * 2;
        break;
      case "Nhân viên":
        this.tongLuong = parseInt(this.luongCoBan) * 1;
        break;
      default:
        this.tongLuong = 0;
    }
    return this.tongLuong;
  };

  this.xepLoaiNV = function () {
    if (parseInt(this.gioLam) >= 192) {
      this.loaiNV = "Nhân viên xuất sắc";
    } else if (parseInt(this.gioLam) >= 176 && parseInt(this.gioLam) < 192) {
      this.loaiNV = "Nhân viên giỏi";
    } else if (parseInt(this.gioLam) >= 160 && parseInt(this.gioLam) < 176) {
      this.loaiNV = "Nhân viên khá";
    } else {
      this.loaiNV = "Nhân viên trung bình";
    }
    return this.loaiNV;
  };
}

function DanhSachNhanVien() {
  this.arr = [];

  // Tìm vị trí nhân viên
  this.timViTriNhanVien = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanvien = this.arr[i];
      if (nhanvien.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  //   Thêm nhân viên
  this._themNhanVien = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  // Xóa nhân viên
  this._xoaNhanVien = function (taiKhoan) {
    var index = this.timViTriNhanVien(taiKhoan);
    if (index != -1) {
      this.arr.splice(index, 1);
    }
  };

  // Sửa nhân viên
  this._suaNhanVien = function (taiKhoan) {
    var index = this.timViTriNhanVien(taiKhoan);
    if (index != -1) {
      var nhanVien = this.arr[index];
      return nhanVien;
    }
    return null;
  };

  // Cập nhật nhân viên
  this._capNhatNhanVien = function (nhanVien) {
    var index = this.timViTriNhanVien(nhanVien.taiKhoan);
    if (index != -1) {
      this.arr[index] = nhanVien;
    }
  };

  // Tìm kiếm nhân viên
  this._timKiemNhanVien = function (keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nhanvien = this.arr[i];
      if (nhanvien.loaiNV.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
        mangTimKiem.push(nhanvien);
      }
    }
    return mangTimKiem;
  };
}

function Validation() {
  // Kiểm tra rỗng
  this.kiemTraRong = function (value, errorID, mess) {
    if (value === "") {
      // Lỗi
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    } else {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
  };

  // Kiểm tra độ dài chuỗi
  this.kiemTraDoDaiChuoi = function (value, errorID, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      //   Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }

    // Không hợp lệ
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // Kiểm tra tên phải là chữ
  this.kiemTraTenLaChu = function (value, errorID, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (value.match(letter)) {
      // Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }

    // Không hợp lệ
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // Kiểm tra email
  this.kiemTraDinhDangEmail = function (value, errorID, mess) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(email)) {
      // Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }

    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // Kiểm tra mật khẩu
  this.kiemTraMatKhau = function (value, errorID, mess) {
    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (value.match(password)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // Kiểm tra ngày làm
  this.kiemTraNgayLam = function (value, errorID, mess) {
    var date =
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;

    if (value.match(date)) {
      // Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }

    // Không hợp lệ
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // Kiểm tra số
  this.kiemTraDuLieuSo = function (value, errorID, mess) {
    var number = /^[0-9]+$/;

    if (value.match(number)) {
      // Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // Không hợp lệ
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // Kiểm tra lương cơ bản
  this.kiemTraLuongCb = function (value, errorID, mess) {
    if (1000000 <= value && value <= 20000000) {
      // Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // Không hợp lệ
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }
  };

  // Kiểm tra chức vụ
  this.kiemTraChucVu = function (value, errorID, mess) {
    if (value === "Chọn chức vụ") {
      // Không hợp lệ
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }
    // Hợp lệ
    getEle(errorID).innerHTML = "";
    getEle(errorID).style.display = "none";
    return true;
  };

  // Kiểm tra giờ làm
  this.kiemTraGioLam = function (value, errorID, mess) {
    if (80 <= value && value <= 200) {
      // Hợp lệ
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }

    // Không hợp lệ
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
}

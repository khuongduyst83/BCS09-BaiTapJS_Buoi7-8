//B2: Tạo mảng và push dữ liệu vào trong mảng
var arrNhapSo = [];
var arrNhapSoThuc = [];
// B1: Lấy dữ liệu các số người dùng nhập

document.getElementById("btn-bt").onclick = function () {
  var nhapSoN = document.getElementById("nhapSoN").value * 1;
  if (isNaN(nhapSoN)) {
    alert("Chỉ có thể nhập số");
    nhapSoN = document.getElementById("nhapSoN").value = "";
  } else {
    arrNhapSo.push(nhapSoN);
    nhapSoN = document.getElementById("nhapSoN").value = "";
  }
  document.getElementById("ketQuaNhapSoN").innerHTML = arrNhapSo;
};

//B4: DOM tới nút button, xử lí yêu cầu và render dữ liệu lên cho người dùng biết kết quả
// BT1: Tính tổng các số dương trong mảng
document.getElementById("btn-bt1").addEventListener("click", function () {
  var tongSoD = 0;
  for (i = 0; i < arrNhapSo.length; i++) {
    if (arrNhapSo[i] > 0) {
      var nhapSoN = arrNhapSo[i];
      tongSoD += nhapSoN;
    }
  }
  console.log(tongSoD);
  document.getElementById(
    "ketQuaTinhTong"
  ).innerHTML = `Tổng giá trị các số dương là: ${tongSoD}`;
});

// BT2: Kết quả đếm số Dương

document.getElementById("btn-bt2").addEventListener("click", function () {
  var countSoD = 0;
  for (i = 0; i < arrNhapSo.length; i++) {
    if (arrNhapSo[i] > 0) {
      countSoD++;
    }
  }
  console.log(countSoD);
  document.getElementById(
    "ketQuaDemSoDuong"
  ).innerHTML = `Tổng các số dương là: ${countSoD}`;
});

// BT3 : Tìm số nhỏ nhất

document.getElementById("btn-bt3").addEventListener("click", function () {
  var soNhoNhat = arrNhapSo[0];
  for (i = 1; i < arrNhapSo.length; i++) {
    if (arrNhapSo[i] < soNhoNhat) {
      soNhoNhat = arrNhapSo[i];
    }
  }
  console.log(soNhoNhat);
  document.getElementById(
    "ketQuaTimSoNhoNhat"
  ).innerHTML = `Tổng số nhỏ nhất là: ${soNhoNhat}`;
});

// BT4 : Tìm số dương nhỏ nhất
document.getElementById("btn-bt4").addEventListener("click", function () {
  var soDuongNhoNhat = Infinity;
  for (i = 0; i < arrNhapSo.length; i++) {
    if (arrNhapSo[i] > 0 && arrNhapSo[i] < soDuongNhoNhat) {
      soDuongNhoNhat = arrNhapSo[i];
    } else {
      soDuongNhoNhat = "Không có số dương trong mảng";
    }
  }

  console.log(soDuongNhoNhat);
  document.getElementById(
    "ketQuaTimSoDuongNhoNhat"
  ).innerHTML = `Tổng số dương nhỏ nhất ${soDuongNhoNhat}`;
});

// BT5 : Tìm số chẵn Cuối Cùng

document.getElementById("btn-bt5").addEventListener("click", function () {
  var soChanCuoiCung = -1;
  for (i = arrNhapSo.length - 1; i >= 0 && soChanCuoiCung == -1; i--) {
    if (arrNhapSo[i] > 0 && arrNhapSo[i] % 2 == 0) {
      soChanCuoiCung = arrNhapSo[i];
      console.log(soChanCuoiCung);
      document.getElementById(
        "ketQuaTimSoChanCuoiCung"
      ).innerHTML = `Tổng số Chẵn Cuối Cùng ${soChanCuoiCung}`;
    } else {
      document.getElementById("ketQuaTimSoChanCuoiCung").innerHTML = -1;
    }
  }
});

// BT6 : Đổi chỗ
//Yêu cầu 6:Đổi chỗ 2 giá trị trong mảng dãy số đã nhập theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
document.getElementById("btn-bt6").addEventListener("click", function () {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;

  if (
    viTri1 >= 0 &&
    viTri1 < arrNhapSo.length &&
    viTri2 >= 0 &&
    viTri2 < arrNhapSo.length
  ) {
    // console.log(arrSoNhap[viTri1]);
    // console.log(arrSoNhap[viTri2]);
    var tamThoi = arrNhapSo[viTri1];
    arrNhapSo[viTri1] = arrNhapSo[viTri2];
    arrNhapSo[viTri2] = tamThoi;
    // console.log(arrSoNhap);
    document.getElementById(
      "ketQuaDoiCho"
    ).innerHTML = `Mảng dãy số sau khi đã đổi chỗ vị trí 2 giá trị là: ${arrNhapSo}`;
  } else {
    alert("Yêu cầu nhập vào vị trí hợp lệ");
  }
});

// BT7 : Sắp xếp tăng dần
document.getElementById("btn-bt7").addEventListener("click", function () {
  var arrSoNguyen = arrNhapSo.sort();
  var arrSoNguyen = 0;
  arrSoNguyen = arrNhapSo.sort(function (a, b) {
    return a - b;
  });
  console.log(arrSoNguyen);
  document.getElementById(
    "ketQuaSapXepTangDan"
  ).innerHTML = `Kết quả sắp xếp tăng dần: ${arrSoNguyen}`;
});

// BT8 : Tìm số nguyên đầu tiên
document.getElementById("btn-bt8").addEventListener("click", function () {
  function checkSo(so) {
    if (so <= 1) return false;
    for (var z = 2; z <= Math.sqrt(so); z++) {
      if (so % z === 0) return false;
    }
    return true;
  }
  var soNguyenToDauTien = "";
  for (var i = 0; i < arrNhapSo.length; i++) {
    if (checkSo(arrNhapSo[i])) {
      soNguyenToDauTien += arrNhapSo[i];
      document.getElementById(
        "ketQuaTimSoNguyenDauTien"
      ).innerHTML = `Số ${soNguyenToDauTien} là số nguyên tố đầu tiên trong mảng dãy số`;
      return;
    } else {
      document.getElementById("ketQuaTimSoNguyenDauTien").innerHTML = -1;
    }
  }
});

// BT 9 : Đếm số Nguyên
document.getElementById("btn-bt9").addEventListener("click", function () {
  var coutSoN = 1;
  for (a = 0; a < arrNhapSoThuc.length; a++) {
    if (arrNhapSoThuc[a] % 1 == 0) {
      coutSoN++;
    }
  }

  document.getElementById(
    "ketQuaDemSoNguyen"
  ).innerHTML = `Kết quả đếm được ${coutSoN} số nguyên`;
});

// document.getElementById("btn-bt2").addEventListener("click", function () {
//   var countSoD = 0;
//   for (i = 0; i < arrNhapSo.length; i++) {
//     if (arrNhapSo[i] > 0) {
//       countSoD++;
//     }
//   }
//   console.log(countSoD);
//   document.getElementById(
//     "ketQuaDemSoDuong"
//   ).innerHTML = `Tổng các số dương là: ${countSoD}`;
// });

// BT 10 : So Sánh Số Lượng Số Âm và Số Dương
document.getElementById("btn-bt10").addEventListener("click", function () {
  var soDuongSoSanh = 0;
  var soAmSoSanh = 0;

  for (i = 0; i < arrNhapSo.length; i++) {
    if (arrNhapSo[i] < 0) {
      soAmSoSanh++;
    } else if (arrNhapSo[i] > 0) {
      soDuongSoSanh++;
    }
  }
  if (soDuongSoSanh > soAmSoSanh) {
    document.getElementById("ketQuaSoSanh").innerHTML = "số Dương > số Âm";
  } else if (soDuongSoSanh < soAmSoSanh) {
    document.getElementById("ketQuaSoSanh").innerHTML = "Số Dương < số Âm";
  } else {
    document.getElementById("ketQuaSoSanh").innerHTML = "số Dương = số Âm";
  }
});

//B2: Tạo mảng và push dữ liệu vào trong mảng
var arrNhapSo = [];
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

// BT5 : Tìm số chẵn nhỏ nhất

document.getElementById("btn-bt5").addEventListener("click", function () {
  var soChanCuoiCung = Infinity;
  for (i = 0; i < arrNhapSo.length; i++) {
    if (arrNhapSo[i] < soChanCuoiCung) {
      soChanCuoiCung = arrNhapSo[i];
    }
  }

  console.log(soChanCuoiCung);
  document.getElementById(
    "ketQuaTimSoChanCuoiCung"
  ).innerHTML = `Tổng số Chẵn Cuối Cùng ${soChanCuoiCung}`;
});

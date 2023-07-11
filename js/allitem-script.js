// scroll header
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hidden");
  } else {
    document.getElementById("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};
//header hienthi dropdown
function showProduct() {
  var product = document.getElementById("product");
  var hidden = document.getElementById("hidden-clothes");
  var hidden2 = document.getElementById("hidden-account");
  if (product.style.display === "none") {
    product.style.display = "block";
    hidden.style.right = "500px";
    hidden2.style.right = "290px";
  } else {
    product.style.display = "none";
    hidden.style.right = "300px";
    hidden2.style.right = "90px";
  }
}
//Giam so luong
function tru() {
  let quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}
//Tang so luong
function cong() {
  let quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}
//click-image
const activeImage = document.querySelector(".img-main img");
const productImages = document.querySelectorAll(".img-extra img");
function changeImage(e) {
  activeImage.src = e.target.src;
}
productImages.forEach((image) => image.addEventListener("click", changeImage));

//Chuyen mau + lay gia tri kich thuoc
function changeColor(button) 
{
  let buttons = document.querySelectorAll(".ul-li button");
  buttons.forEach(function (btn) {
    btn.style.backgroundColor = "";
  });
  button.style.backgroundColor = "#ff0157";
  let selectedSize = button.textContent;
  localStorage.setItem("selectedSize", selectedSize);
}
//Them san pham
function bought() {
  //lay du lieu
  let name = document.querySelector(".info h1").textContent;
  let selectedSize = localStorage.getItem("selectedSize");
  let quantity = document.getElementById("quantity").value;
  //Gan gia tri sang int
  var giaTri = document.getElementById("giatien").innerText;
  var giaTriSo = parseInt(giaTri.replace(/,/g, ""));
  // Tính tổng giá tiền
  let totalPrice = giaTriSo * parseInt(quantity);
  //push du lieu vao localstorage
  let giohang = localStorage.getItem("giohang");
  let giohangarray = JSON.parse(giohang) || [];
  giohangarray.push({
    name: name,
    size: selectedSize,
    "Số lượng": quantity,
    totalPrice: totalPrice,
  });
  alert("Thêm sản phẩm vào giỏ hàng thành công");
  console.log(giohangarray);
  
  localStorage.setItem("giohang", JSON.stringify(giohangarray));
}

var originalInnerHTML = document.getElementById("confirmationDiv").innerHTML;
function resetConfirmation() {
  var confirmationDiv = document.getElementById("confirmationDiv");
  confirmationDiv.innerHTML = originalInnerHTML;
}
// Thanh toan san pham
function showConfirmation() {
  var confirmationDiv = document.getElementById("confirmationDiv");
  confirmationDiv.style.display = "block";
  resetConfirmation();
}
function hideConfirmation() {
  var confirmationDiv = document.getElementById("confirmationDiv");
  confirmationDiv.style.display = "none";
}

function togglePaymentDetails() {
  var paymentMethod = document.getElementById("paymentMethod").value;
  var bankDetails = document.getElementById("bankDetails");
  var momoDetails = document.getElementById("momoDetails");
  var confirmButton = document.getElementById("confirmButton");

  if (paymentMethod === "transfer") {
    bankDetails.style.display = "block";
    momoDetails.style.display = "none";
    confirmButton.disabled = false; // Bật nút xác nhận
  } else if (paymentMethod === "momo") {
    bankDetails.style.display = "none";
    momoDetails.style.display = "block";
    confirmButton.disabled = true; // Vô hiệu hóa nút xác nhận
  } else {
    bankDetails.style.display = "none";
    momoDetails.style.display = "none";
    confirmButton.disabled = true; // Vô hiệu hóa nút xác nhận
  }
}

function confirmPurchase() {
  alert("Mua hàng thành công, cảm ơn quý khách");
  hideConfirmation();
}

//size-chart
function openSizeChart() {
  var open = document.getElementById("show-size-chart");
  open.style.display = "block";
}
function closeSizeChart() {
  var close = document.getElementById("show-size-chart");
  close.style.display = "none";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) 
  {
    document.getElementById("header").classList.remove("hidden");
  }
  else 
  {
    document.getElementById("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};

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

//Tao du lieu cac xa , quan , huyen , TP
const THANH_PHO_DATA = [
  {
    id: "ha-noi",
    name: "Hà Nội",
    huyen: [
      {
        id: "huyen-unghoa",
        name: "Huyện Ứng Hoà",
        xa: [
          { id: "xa-donglo", name: "xã Đông Lỗ" },
          { id: "xa-daicuong", name: "xã Đại Cường" },
          { id: "xa-kimduong", name: "xã Kim Đường" },
        ],
      },
      {
        id: "quan-caugiay",
        name: "Quận Cầu Giấy",
        xa: [
          { id: "phuong-maidich", name: "phường Mai Dịch" },
          { id: "phuong-xuanthuy", name: "phường Xuân Thuỷ" },
          { id: "phuong-trunghoa", name: "phường Trung Hoà" },
        ],
      },
      {
        id: "huyen-thuongtin",
        name: "Huyện Thường Tín",
        xa: [
          { id: "xa-daihung", name: "xã Đại Hùng" },
          { id: "xa-kimlien", name: "xã Kim Liên" },
          { id: "xa-trungminh", name: "xã Trung Minh" },
        ],
      },
    ],
  },

  {
    id: "ho-chi-minh",
    name: "Hồ Chí Minh",
    huyen: [
      {
        id: "quan-1",
        name: "Quận 1",
        xa: [
          { id: "phuong-xuankhanh", name: "phường Xuân Khanh" },
          { id: "phuong-hamlong", name: "phường Hàm Long" },
          { id: "phuong-hoalac", name: "phường Hoà Lạc" },
        ],
      },
      {
        id: "quan-thuduc",
        name: "Quận Thủ Đức",
        xa: [
          { id: "phuong-connhue", name: "phường Cổ Nhuế" },
          { id: "phuong-xuanthuy", name: "phường Xuân Thuỷ" },
          { id: "phuong-tumo", name: "phường Tú Mỡ" },
        ],
      },
      {
        id: "huyen-cuchi",
        name: "Huyện Củ Chi",
        xa: [
          { id: "xa-baolam", name: "xã Bảo Lâm" },
          { id: "xa-bachkhoa", name: "xã Bách Khoa" },
          { id: "xa-minhyen", name: "xã Minh Yên" },
        ],
      },
    ],
  },
];

const thanhPhoSelect = document.getElementById("thanh-pho");
const huyenSelect = document.getElementById("huyen");
const xaSelect = document.getElementById("xa");

thanhPhoSelect.addEventListener("change", () => {
  // Xóa các option cũ của select huyện và xã
  huyenSelect.innerHTML = "<option value=''>-- Chọn quận/huyện --</option>";
  xaSelect.innerHTML = "<option value=''>-- Chọn xã/phường --</option>";

  // Nếu không chọn thành phố, không làm gì cả
  if (!thanhPhoSelect.value) return;

  // Lọc ra các huyện thuộc thành phố đó và thêm vào select huyện
  const thanhPhoData = THANH_PHO_DATA.find(
    (thanhPho) => thanhPho.id === thanhPhoSelect.value
  );
  thanhPhoData.huyen.forEach((huyen) => {
    const option = document.createElement("option");
    option.value = huyen.id;
    option.textContent = huyen.name;
    huyenSelect.appendChild(option);
  });
});

huyenSelect.addEventListener("change", () => { xaSelect.innerHTML = "<option value=''>-- Chọn xã/phường --</option>";
  // Nếu không chọn huyện, không làm gì cả
  if (!huyenSelect.value) return;
  // Lọc ra các xã thuộc huyện đó và thêm vào select xã
  const thanhPhoData = THANH_PHO_DATA.find(
    (thanhPho) => thanhPho.id === thanhPhoSelect.value
  );
  const huyenData = thanhPhoData.huyen.find(
    (huyen) => huyen.id === huyenSelect.value
  );
  huyenData.xa.forEach((xa) => {
    const option = document.createElement("option");
    option.value = xa.id;
    option.textContent = xa.name;
    xaSelect.appendChild(option);
  });
});

const rangeSlider = document.querySelector(".range-slider");
const rangeValue = document.querySelector(".range-value");
  rangeSlider.addEventListener("input", () => { rangeValue.textContent = rangeSlider.value; 
  updateRangeValuePosition();});
function updateRangeValuePosition() 
{
  const value = (rangeSlider.value - rangeSlider.min) / (rangeSlider.max - rangeSlider.min); 
  rangeValue.style.left = `${value * 100}%`;
}

const rangeSlider2 = document.querySelector(".range-slider2");
const rangeValue2 = document.querySelector(".range-value2");
  rangeSlider2.addEventListener("input", () => { rangeValue2.textContent = rangeSlider2.value; 
  updateRangeValuePosition2();});
function updateRangeValuePosition2() {
  const value = (rangeSlider2.value - rangeSlider2.min) / (rangeSlider2.max - rangeSlider2.min);
  rangeValue2.style.left = `${value * 100}%`;
}

//Chuyen doi cac Tabs
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

//Submit voucher
const discountCodeInput = document.getElementById("discount-code");
const applyButton = document.querySelector(".apply-button");
discountCodeInput.addEventListener("input", function () {
  applyButton.disabled = this.value.trim() === "";
});

//Chay du lieu trong localstorage ngay khi load trang
window.addEventListener("load", () => {
  let giohang = localStorage.getItem("giohang");
  let giohangarray = JSON.parse(giohang) || [];
  showCartItems(giohangarray);
});
//Hien thi san pham
function showCartItems(cartItems) {
  let html = "";
  let totalAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    //moi sp gan vao item
    let item = cartItems[i];
    let itemp = '<p class="cart-item">' + item.name + " - Kích thước: " + item.size + " - Số lượng: " + item["Số lượng"] + " - Giá: " +
      formatPrice(item.totalPrice) +
      '<button class="btn-cart-item" onclick="removeCartItem(' + i + ')">Xoá</button></p>';
      //them
      html += itemp;
      totalAmount += item.totalPrice; 
  }
  
    document.getElementById("hienthi").innerHTML = html;
    document.getElementById("tinhtoan").textContent = "Tổng tiền: " + formatPrice(totalAmount);
}
//chuyen sang vnd
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}
//Xoa san pham
function removeCartItem(index) {
  let giohang = localStorage.getItem("giohang");
  let giohangarray = JSON.parse(giohang) || [];
  giohangarray.splice(index, 1); // Xoá phần tử tại index
  localStorage.setItem("giohang", JSON.stringify(giohangarray));
  showCartItems(giohangarray);
}
//button thanh toan
function thanhtoan() {
  let giohang = localStorage.getItem("giohang");
  let giohangarray = JSON.parse(giohang) || [];

  if (giohangarray.length === 0) {
    alert("Bạn không có sản phẩm nào để thanh toán.");
    return;
  } else {
    alert("Bạn đã thanh toán thành công.");
    localStorage.removeItem("giohang");
    showCartItems([]);
  }
}
function uppdateAccount() {
  alert("Cập nhật tài khoản thành công");
}

function validateEmail(email) {
  // Regular expression pattern for email validation
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Use the test() method to check if the email matches the pattern
  if (!pattern.test(email)) {
    return false; // Valid email
  } else {
    return true; // Invalid email
  }
}

function kiem_tra()
{
    //Ho va ten
    let testerror = false;
    let ten = document.getElementById('ten').value;
    if(ten.length==0)
    {
        document.getElementById('empty-name').innerHTML = 'Bạn chưa nhập họ và tên';
        testerror = true;
    }
    else
    {
      let regex_name = /^[\p{L}\s]+$/u;
      if(!regex_name.test(ten))
      {
        document.getElementById('empty-name').innerHTML = 'Họ tên không hợp lệ';
        testerror = true;
      }
      else
      {
        document.getElementById('empty-name').innerHTML = ' ';
      }
    }
    //email
    let email = document.getElementById('email').value;
    if(email.length == 0)
    {
      document.getElementById('empty-email').innerHTML = 'Bạn chưa nhập email';
      testerror = true;
    }
    else
    {
        if(validateEmail(email))
        {
          document.getElementById('empty-email').innerHTML = ' ';
        }
        else
        {
          document.getElementById('empty-email').innerHTML = 'Email không hợp lệ';
          testerror = true;
        }
    }
    //So dien thoai
    let tel = document.getElementById('tel').value;
    if(tel.length==0)
    {
        document.getElementById('empty-number').innerHTML = 'Bạn chưa nhập số điện thoại';
        testerror = true;
    }
    else
    {
      let regex_number = /^0\d{9}$/;
      if(!regex_number.test(tel))
      {
        document.getElementById('empty-number').innerHTML = 'Số điện thoại không hợp lệ';
        testerror = true;
      }
      else
      {
        document.getElementById('empty-number').innerHTML = ' ';
      }
    }
    
    //Mat khau
    let password = document.getElementById('mat_khau').value;
    if(password.length==0)
    {
      document.getElementById('empty-password').innerHTML = 'Bạn chưa nhập mật khẩu';
      testerror = true;
    }
    else
    {
      document.getElementById('empty-password').innerHTML = ' ';
    }
    // 
    let password2 = document.getElementById('mat_khau2').value;
    if(password2.length==0)
    {
      document.getElementById('empty-password2').innerHTML = 'Bạn chưa nhập mật khẩu';
      testerror = true;
    }
    else
    {
      if(password != password2)
      {
        document.getElementById('empty-password2').innerHTML = 'Mật khẩu không khớp';
        testerror = true;
      }
      else
      {
        document.getElementById('empty-password2').innerHTML = ' ';
      }
    }

    if(testerror)
    {
        return false;
    }
    else{
      alert('Đăng kí thành công!');
    }
    let name = document.getElementById('ten').value;
    let pass = document.getElementById('mat_khau2').value;
    let account = localStorage.getItem("account");
    // Tạo object
    let accountObject = JSON.parse(account) || {};
    // Gán giá trị vào object
    accountObject.name = name;
    accountObject.pass = pass;
    console.log(accountObject);
    localStorage.setItem("account", JSON.stringify(accountObject));
}
//An-hien mat khau
function show_password()
{
    let password_input = document.getElementById("mat_khau");
    const showBtn = document.querySelector("span i");
    if (password_input.type === "password") 
    {
      password_input.type = "text"; 
    } 
    else 
    {
      password_input.type = "password";
    }
}
function show_password2(){
    let password_input2 = document.getElementById("mat_khau2");
    const showBtn2 = document.querySelector("span i");
    if (password_input2.type === "password") 
    {
      password_input2.type = "text";
    } 
    else 
    {
      password_input2.type = "password";
    }
}
//An nut Dang ki
  const agreeCheckbox = document.getElementById('agree');
  const submitButton = document.getElementById('submit');
  agreeCheckbox.addEventListener('change', function() 
  {
    submitButton.disabled = !this.checked;
    submitButton.style.pointerEvents = this.checked ? 'auto' : 'none';
  });
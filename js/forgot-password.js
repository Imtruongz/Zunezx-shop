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
  //email
  let testerror = false;
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

  if(testerror)
  {
      return false;
  }
  else
  {
    alert('Đã gửi mật khẩu về email của bạn!');
  }
}
    function show_password()
    {
      let password_input = document.getElementById("mat-khau");
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

    const username = "admin";
    const password = "123";
    
    function validate() {
      let testerror = false;
      let account = localStorage.getItem('account');
      let gh = JSON.parse(account) || {};
    
      let usernameInput = document.getElementById("ten").value;
      if (usernameInput === gh.name) {
        document.getElementById('empty-name').innerHTML = '';
      } else if (usernameInput.length === 0) {
        document.getElementById('empty-name').innerHTML = 'Bạn chưa nhập tên tài khoản';
        testerror = true;
      } else if (usernameInput !== username) {
        document.getElementById('empty-name').innerHTML = '';
        document.getElementById('empty-name-password').innerHTML = 'Sai tài khoản hoặc mật khẩu, vui lòng thử lại.';
        testerror = true;
      }
    
      let passwordInput = document.getElementById('mat-khau').value;
      if (passwordInput === gh.pass) {
        document.getElementById('empty-password').innerHTML = '';
      } else if (passwordInput.length === 0) {
        document.getElementById('empty-password').innerHTML = 'Bạn chưa nhập mật khẩu';
        testerror = true;
      } else if (passwordInput !== password) {
        document.getElementById('empty-password').innerHTML = '';
        document.getElementById('empty-name-password').innerHTML = 'Sai tài khoản hoặc mật khẩu, vui lòng thử lại.';
        testerror = true;
      }
    
      if (testerror) {
        return false;
      } else {
        window.location.href = "trangchu.html";
        return false;
      }
    }
    


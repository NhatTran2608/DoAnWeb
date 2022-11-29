function reset_form() {
    document.getElementById("user_form").reset();
}

function login_usr() {
    var x = document.getElementById('usr').value
    var y = document.getElementById('pass').value
    if (x == 'admin' && y == '123') {
        alert('Đăng nhập thành công');
        window.location.href = '/index.html';
    }
    else if(x !='' && y !=''){
        alert('Vui lòng nhập đầy đủ thông tin!!!')
    }
    else {
        alert('Tài khoản hoặc mật khẩu không đúng!!!');
        reset_form();
    }

}
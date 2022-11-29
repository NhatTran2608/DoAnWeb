const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
    small.innerText = ''
}

/*Check email*/
function checkEmail(input) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email nhập không dúng')
    }
}

/*Check empty */
function checkEmpty(Listinput) {
    var isEmpty = false
    Listinput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            isEmpty = true;
            showError(input, 'Vui lòng nhập dữ liệu vào trường này')
        } else {
            showSuccess(input)
        }
    });
    return isEmpty
}

/*check password*/
function checkPassword(input, min, max) {
    if (input.value.length < min) {
        showError(input, `Vui lòng nhập lớn hơn ${min} ký tự`);
    } else {
        showSuccess(input)
    }
}

/*check password match */
function matchPass(input, input2) {
    if (input.value != input2.value) {
        showError(input2, 'Mật khẩu nhập lại không khớp')
    }
}

function callError() {
    checkEmail(email)
    checkPassword(password, 6)
    matchPass(password, password2)
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!checkEmpty([username, email, password, password2])) {
        callError()
    }

})




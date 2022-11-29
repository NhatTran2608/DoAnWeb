var listPhone = document.querySelector('.list_phone')
var icon = document.querySelector('.drop')
var searchIcon = document.querySelector('.search_icon i')
var Imgslider = document.querySelector('.img_slider')
var searchInput = document.querySelector('.search_input')
var navChild = document.querySelector('.nav_body')

/*button product */
const ItemBtn = document.querySelectorAll('.add_cart')



icon.addEventListener('click', function () {
    listPhone.classList.toggle('hide_list')
})

searchIcon.addEventListener('click', function () {
    searchIcon.classList.add('hide')
    searchInput.classList.remove('hide')
})

Imgslider.addEventListener('click', function () {
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})

navChild.addEventListener('click', function () {
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})


/* Lắng nghe sự kiện button Chuyển product qua local*/
let items = [];
for (let i = 0; i < ItemBtn.length; i++) {
    ItemBtn[i].addEventListener('click', function (e) {
        if (typeof (Storage) !== 'undefined') {
            let item = {
                id: i + 1,
                img: e.target.parentElement.nextSibling.parentElement.parentElement.children[0].children[0].src,
                name: e.target.parentElement.nextSibling.parentElement.children[0].textContent,
                price: e.target.parentElement.nextSibling.parentElement.children[2].children[0].textContent,
                quantity: 1
            };
            if (JSON.parse(localStorage.getItem('items')) === null) {
                items.push(item)
                localStorage.setItem("items", JSON.stringify(items))
                window.location.reload()
            } else {
                const localItems = JSON.parse(localStorage.getItem("items"))
                localItems.map(data => {
                    if (item.name == data.name) {
                        item.quantity = data.quantity + 1
                    } else {
                        items.push(data)
                    }
                })
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload()
            }
        } else {
            alert('local Storage is not working!')
        }
    })
}

/*Thêm phẩy phần nghìn */
const formatCurrency = (amount, locale = "vi-VN") => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

/*Tăng số lượng trên cartIcon */
var NumCart = document.querySelector('.cartNum span')
let num = 0
let GetlocalCart = JSON.parse(localStorage.getItem('items'))
GetlocalCart.map(data => {
    num = num + data.quantity
})// chuyển về dạng objects để đọc số lượng sau đó innerText cho NumCart
NumCart.innerText = num

/*Scroll on Top */
$('.shop_name i').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow')
})
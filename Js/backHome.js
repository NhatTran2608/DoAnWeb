var searchInput = document.querySelector('.search_input');
var searchIcon = document.querySelector('.search');
var leftIcon = document.querySelector(".prev");
var rightIcon = document.querySelector('.next');
var ImgPhone = document.getElementById("img_phone");
var Slider = document.querySelector('.container');
var NavChild = document.querySelector('.nav_body');
var List = document.querySelector('.list');
var system = document.querySelector('.System');


function ShowIcon() {
    searchIcon.classList.remove('hide');
    searchInput.classList.add('hide');
}

function hideIcon() {
    searchIcon.classList.add('hide');
    searchInput.classList.remove('hide');
}

NavChild.addEventListener('click', function () {
    ShowIcon();
})

Slider.addEventListener('click', function () {
    ShowIcon();
})

var image = [];
var index = 0;

searchIcon.addEventListener('click', () => {
    hideIcon();
})

for (let i = 0; i < 3; i++) {
    image[i] = new Image();
    image[i].src = "img/img" + i + '.webp';
}

function imageClick() {
    index = 0;
    ImgPhone.src = image[index].src
}

function imageClick1() {
    index = 1;
    ImgPhone.src = image[index].src
}

function imageClick2() {
    index = 2;
    ImgPhone.src = image[index].src
}

rightIcon.addEventListener('click', function () {
    index++;
    if (index >= image.length) {
        index = 0;
    }
    ImgPhone.src = image[index].src
})

leftIcon.addEventListener('click', function () {
    index--;
    ImgPhone.src = image[index].src
})


var endsale = new Date("November 25 , 2022 00:00:00").getTime()
setInterval(function () {
    var beginSale = new Date().getTime();
    var endGame = endsale - beginSale;

    var days = Math.floor(endGame / (1000 * 60 * 60 * 24));
    var hours = Math.floor(endGame / (1000 * 60 * 60));
    var minutes = Math.floor(endGame / (1000 * 60));
    var seconds = Math.floor(endGame / (1000));

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.querySelector('.day').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minute').innerText = minutes;
    document.querySelector('.second').innerText = seconds;
})

List.addEventListener('click', () => {
    system.classList.toggle('hide')
})

NavChild.addEventListener('click', function () {
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})
/*add cart*/


/*Show and Hide Cart*/


/*Add cart */

/*Scroll on Top */
$('.shop_name i').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow')
})


/*button product */

var NumCart = document.querySelector(".cartNum span")
const ItemBtn = document.querySelectorAll('.add_cart')





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
                    if (item.id == data.id) {
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

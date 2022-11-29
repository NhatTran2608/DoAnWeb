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
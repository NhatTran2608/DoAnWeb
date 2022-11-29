var modal = document.querySelector('.modal')
var modalContainer = modal.children[0].children[0]
var buttonYes = modalContainer.parentElement.children[1].children[0]
var buttonNo = modalContainer.parentElement.children[1].children[1]
console.log(buttonNo)


/*Thêm phẩy phần nghìn */
const formatCurrency = (amount, locale = "vi-VN") => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

var TextNull = document.querySelector('.null_text')

/*Tăng số lượng trên cartIcon */
var NumCart = document.querySelector('.cartNum span')
let num = 0
let GetlocalCart = JSON.parse(localStorage.getItem('items'))
GetlocalCart.map(data => {
    num = num + data.quantity
})// chuyển về dạng objects để đọc số lượng sau đó innerText cho NumCart
NumCart.innerText = num

//Lấy products ra local và thêm sản phẩm vào giỏ hàng
var Cost = document.querySelector('.total')
const tableCart = document.querySelector('table')
var total = 0
var convert = 0
let tableTotal = ''
let tableData = ''
tableData += `
                        <thead>
                                <tr>
                                    <th>
                                        <h4>Hình ảnh</h4>
                                    </th>
                                    <th>
                                        <h4>Sản phẩm</h4>
                                    </th>
                                    <th>
                                        <h4>Giá</h4>
                                    </th>
                                    <th>
                                        <h4>Số lượng</h4>
                                    </th>
                                    <th>
                                        <h4>Chọn</h4>
                                    </th>
                                </tr>
                        </thead>
`
if (GetlocalCart[0] == null) {
    TextNull.innerHTML = 'Chưa có sản phẩm nào trong giỏ hàng :('
} else {
    JSON.parse(localStorage.getItem('items')).forEach(data => {
        total += Number(data.quantity) * Number(data.price.replace(/[^0-9]/g, ""))
        tableData += `
        <tr>    
        <td><img class="cart_pd" src="${data.img}" alt=""></td>
        <td><b class="cart_pd cart_name">${data.name}</b></td>
        <td><span class="prices">${formatCurrency(data.price.replace(/[^0-9]/g, ""))}</span></td>
        <td><input type="number" value="${data.quantity}" id="input_number" class="cart_pd"></input></td>
        <td><i style='color:red;' class='bx bx-x delete cart_pd' onclick="Delete(this)"></i></td>
    </tr>
 `
    })
    tableCart.innerHTML = tableData
    tableTotal +=
        `<b class="total_cost">Tổng chi phí: <span>${formatCurrency(total)}</span></b>
                 <div class="buy">
                    <button class="buy_now">Mua ngay</button>
                 </div>
            `
    Cost.innerHTML = tableTotal
}
/*onclick ="DeleteAll(this)"*/

function Delete(e) {
    let items = []
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.name == e.parentElement.parentElement.children[1].textContent) {
            if (data.quantity > 1) {
                data.quantity--
                items.push(data)
            }
        } else {
            items.push(data)
        }
    })
    localStorage.setItem('items', JSON.stringify(items))
    window.location.reload()
}

/*Scroll on Top */
$('.shop_name i').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow')
})

function DeleteAll(e) {
    let items = []
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.name != e.parentElement.parentElement.children[1].textContent) {
            localStorage.setItem('items', JSON.stringify(items))
        }
    })

    window.location.reload()
}

var tong = formatCurrency(total)

modalContainer.innerText = `Bạn có chắc chắn mua sản phẩm này không ? \n Tổng số tiền của đơn hàng là : ${tong}`

document.querySelector('.buy_now').addEventListener('click',function() {
    modal.classList.remove('hide')
})

buttonYes.addEventListener('click',function() {
    modal.classList.add('hide')
    DeleteAll(this)
    alert('Cảm ơn bạn đã mua sản phẩm của chúng tui')
})

buttonNo.addEventListener('click',function() {
    modal.classList.add('hide')
})
// get total 
// create product
// save localstorage
// clear inputs
// read data
// count 
// delete 
// update
// search 
// clean data

let product_name = document.getElementById('product_name');
let product_price = document.getElementById('product_price');
let product_taxes = document.getElementById('product_taxes');
let product_ads = document.getElementById('product_ads');
let product_discount = document.getElementById('product_discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// console.log(product_name, product_price, product_taxes, product_ads, product_discount, count, category); 

let mood = 'create';
let tmp;

function getTotalPrice() {
    if (product_price.value != '') {
        let totalPrice = (+product_price.value + +product_taxes.value + +product_ads.value) - +product_discount.value;
        total.innerHTML = totalPrice;
        total.style.background = '#040';
    } else {
        total.innerHTML = 0;
        total.style.background = '#a00d02';
    }
}

// create product

let dataPro;
if (localStorage.products != null) {
    dataPro = JSON.parse(localStorage.products);
} else {
    dataPro = [];
}

submit.onclick = function () {
    let newPro = {
        product_name: product_name.value.toLowerCase(),
        product_price: product_price.value,
        product_taxes: product_taxes.value,
        product_ads: product_ads.value,
        product_discount: product_discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }
    if (product_name.value != ''
     && product_price.value != '' 
     && category.value != ''
     && newPro.count < 100) {
        if (mood == 'create') {
            if (newPro.count > 1) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro);
                }
            } else {
                dataPro.push(newPro);
            }
        } else {
            dataPro[tmp] = newPro;
            mood = 'create';
            submit.innerHTML = 'Create';
            count.style.display = 'block';
        }
        clearData();
    }


    // Save data to localStorage
    localStorage.setItem('products', JSON.stringify(dataPro));
    
    showData();

}

// clear inputs

function clearData() {
    product_name.value = '';
    product_price.value = '';
    product_taxes.value = '';
    product_ads.value = '';
    product_discount.value = '';
    total.innerHTML = 0;
    total.style.background = '#a00d02';
    count.value = '';
    category.value = '';
}

// read data

function showData() {

    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `<tr>
                    <td>${i+1}</td>
                    <td>${dataPro[i].product_name}</td>
                    <td>${dataPro[i].product_price}</td>
                    <td>${dataPro[i].product_taxes}</td>
                    <td>${dataPro[i].product_ads}</td>
                    <td>${dataPro[i].product_discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updatePro(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>`


    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAlldev');
    if (dataPro.length > 0) {
        btnDelete.innerHTML = `<button id="deleteAll" onclick="deleteAllData()">Delete All ( ${dataPro.length} )</button>`;
    } else {
        btnDelete.innerHTML = ``;
    }



}
// Lode Data
showData()

// delete 
function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(dataPro));
    showData();
}

// delete All
function deleteAllData() {
    console.log('Delete all')
    dataPro.splice(0);
    localStorage.clear();
    showData();
}

// Update Product

function updatePro(i) {
    product_name.value = dataPro[i].product_name;
    product_price.value = dataPro[i].product_price;
    product_taxes.value = dataPro[i].product_taxes;
    product_ads.value = dataPro[i].product_ads;
    product_discount.value = dataPro[i].product_discount;
    getTotalPrice();
    category.value = dataPro[i].category;
    count.style.display = 'none';
    submit.innerHTML = 'Update Product'
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: 'smooth'
    })

}


let searchMood = 'name';

function getSearchMood(id) {
    let search = document.getElementById('search');

    if (id == 'searchname') {
        searchMood = 'name';
        search.placeholder = 'Search By Name';
    } else {
        searchMood = 'category';
        search.placeholder = 'Search By Category';
    }
    search.focus();
    search.value = '';
    showData();
}
function searchData(value) {
    let table = '';

    for (let i = 0; i < dataPro.length; i++) {
        if (searchMood == 'name') {

            if (dataPro[i].product_name.includes(value.toLowerCase())) {
                table += `<tr>
                    <td>${i}</td>
                    <td>${dataPro[i].product_name}</td>
                    <td>${dataPro[i].product_price}</td>
                    <td>${dataPro[i].product_taxes}</td>
                    <td>${dataPro[i].product_ads}</td>
                    <td>${dataPro[i].product_discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updatePro(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>`
            }
        } else {

            if (dataPro[i].category.includes(value.toLowerCase())) {
                table += `<tr>
                     <td>${i}</td>
                     <td>${dataPro[i].product_name}</td>
                     <td>${dataPro[i].product_price}</td>
                     <td>${dataPro[i].product_taxes}</td>
                     <td>${dataPro[i].product_ads}</td>
                     <td>${dataPro[i].product_discount}</td>
                     <td>${dataPro[i].total}</td>
                     <td>${dataPro[i].category}</td>
                     <td><button onclick="updatePro(${i})" id="update">update</button></td>
                     <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                 </tr>`
            }
        }


    }
    document.getElementById('tbody').innerHTML = table;

}
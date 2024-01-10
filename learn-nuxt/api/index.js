import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

function fetchProductById(id) {
    return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
    return instance.get(`/products`,{
        params: {
            name_like: keyword,
        }
    })    
}

function fetchCartItems(){
    return instance.get('/carts')
}

function createCartItem(carItem){
    return instance.post('/carts', carItem)
}



export{fetchProductById, fetchProductsByKeyword, fetchCartItems, createCartItem}


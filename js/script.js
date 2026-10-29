const boosters = [
    { id: 1, name: "Beginner Pack", img : "assets/4.png" ,price: 50},
    { id: 2, name: "Summoning of the Legends", img : "assets/1.png" ,price: 100},
    { id: 3, name: "Dark Summoning", img : "assets/2.png" ,price: 80},
    { id: 4, name: "Lucky Pack", img : "assets/3.png" ,price: 70}
];
const cart = JSON.parse(localStorage.getItem('cart')) || []
const inventory = JSON.parse(localStorage.getItem('inventory')) || []
let buttons = document.querySelectorAll(".add-cart")
let vide = document.getElementById("cartItems")
let total = document.getElementById("cartTotal")
const btn = document.getElementById("clearCart")
const NumberPanier = document.getElementById('panier-num')
const icrement = document.querySelectorAll('.increase')
const decrement = document.querySelectorAll('.decrease')
const checkout = document.getElementById('checkout')
let N = 0
Afficher()
function Save(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
icrement.forEach((inc) => {
    inc.addEventListener('click',() => {
        let id = Number(inc.dataset.id)
        let qtn = document.getElementById('qty-' + id)
        qtn.textContent = Number(qtn.textContent) + 1
    })
})
decrement.forEach((dec) => {
    dec.addEventListener('click', () =>{
        let id = Number(dec.dataset.id)
        let qty = document.getElementById('qty-' + id)
        if(qty.textContent > 1)
            qty.textContent = Number(qty.textContent) - 1
    })
})
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const id = parseInt(button.dataset.id)
        let qtn = document.getElementById('qty-' + id)
        let quantity = Number(qtn.textContent)
        let carts = boosters.find((item) => {
            return item.id === id;
        })
        let exist = cart.find((item) => {
            return item.id === id
        })
        if(carts){
            if(exist){
                exist.quantity += quantity
            }
            else{
                cart.push({
                    id: carts.id,
                    name: carts.name,
                    img : carts.img,
                    price : carts.price,
                    quantity : quantity
            })
            }
        }
        Afficher();
    })
})
function Afficher(){
    let somme = 0
    vide.innerHTML = ''
    if(cart.length === 0){
        vide.innerHTML = "<p>Votre panier est vide.</p>";
    }
    for(let i = 0 ; i < cart.length ; i++){
        vide.innerHTML += `
        <div class="rounded-xl border m-2 flex justify-center flex-col">
        <h3>${cart[i].name}</h3>
        <p>Prix : ${cart[i].price} DH</p>
        <p>Quantity : ${cart[i].quantity}</p>
        <img src="${cart[i].img} " class="w-20 h-12">
        <button onClick="remove(${cart[i].id})" class="border rounded-2xl p-1 w-25">Supprimer</button>
        </div>`
        somme += cart[i].price * cart[i].quantity
    }
    N = cart.length
    NumberPanier.textContent = N
    total.textContent = somme  + "DH"
    Save()
}
function remove(id){
    let index = cart.findIndex((item) => {
        return item.id === id
    })
    if(index != -1){
        cart.splice(index,1)
    }
    Afficher()
}
btn.addEventListener('click',() => {
    cart.length = 0
    Afficher()
})
checkout.addEventListener('click' , () => {
    if(cart.length > 0){
        cart.forEach((carts) => {
        let id = Number(carts.id)
        let exist = inventory.find((item) => {
            return item.id === id
        })
        let quantity = carts.quantity
        if(exist){
            exist.quantity += quantity
        }
        else{
            inventory.push({
                    id: carts.id,
                    name: carts.name,
                    img : carts.img,
                    price : carts.price,
                    quantity : quantity
            })
        }
    })
    localStorage.setItem('inventory',JSON.stringify(inventory))
    cart.length = 0
    Afficher()
}
})
const boosters = [
    { id: 1, name: "Beginner Pack", img : "assets/4.png" ,price: 50 , quentity : 1},
    { id: 2, name: "Summoning of the Legends", img : "assets/1.png" ,price: 100 , quantity : 1},
    { id: 3, name: "Dark Summoning", img : "assets/2.png" ,price: 80 , quantity : 1},
    { id: 4, name: "Lucky Pack", img : "assets/3.png" ,price: 70, quantity : 1}
];
const cart = []
let buttons = document.querySelectorAll(".add-cart")
let vide = document.getElementById("cartItems")
let total = document.getElementById("cartTotal")
const btn = document.getElementById("clearCart")
const NumberPanier = document.getElementById('panier-num')
const icrement = document.querySelectorAll('.increase')
const decrement = document.querySelectorAll('.decrease')
let N = 0
let quantity = Number(qtn.textContent);
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
        let booster = boosters.find((item) => {
            return item.id === id;
        })
        let exist = cart.find((item) => {
            return item.id === id
        })
        if (booster) {
            if(exist){
                exist.quantity += quantity
            }
            else{
                cart.push({
                    id: booster.id,
                    name: booster.name,
                    img : booster.img,
                    price : booster.price,
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
    for(let i = 0 ; i < cart.length ; i++){
        vide.innerHTML += `
        <div class="rounded-xl border m-2 flex justify-center flex-col">
        <h3>${cart[i].name}</h3>
        <p>Prix : ${cart[i].price} DH</p>
        <p>Quantity : ${cart[i].quantity}</p>
        <img src="${cart[i].img} " class="w-20 h-12">
        <button onClick="remove(${cart[i].id})" class="border rounded-2xl p-1 w-25">Supprimer</button>
        </div>`
        somme += cart[i].price
    }
    N = cart.length
    NumberPanier.textContent = N
    total.textContent = somme + "DH"
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
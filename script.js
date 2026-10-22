const boosters = [
    { id: 1, name: "Beginner Pack", img : "assets/4.png" ,price: 50 },
    { id: 2, name: "Summoning of the Legends", img : "assets/1.png" ,price: 100 },
    { id: 3, name: "Dark Summoning", img : "assets/2.png" ,price: 80 },
    { id: 4, name: "Lucky Pack", img : "assets/3.png" ,price: 70}
];
const cart = []
let buttons = document.querySelectorAll(".add-cart")
let vide = document.getElementById("cartItems")
let total = document.getElementById("cartTotal")
const btn = document.getElementById("clearCart")
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const id = parseInt(button.dataset.id)
        let booster = boosters.find((item) => {
            return item.id === id;
        })
        if (booster) {
            cart.push(booster);
            Afficher();
        }
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
        <img src="${cart[i].img} " class="w-20 h-12">
        <button onClick="remove(${cart[i].id})" class="border rounded-2xl p-1 w-25">Supprimer</button>
        </div>`
        somme += cart[i].price
    }
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
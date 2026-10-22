const boosters = [
    { id: 1, name: "Beginner Pack", img : "assets/1.png" ,price: 50 },
    { id: 2, name: "Summoning of the Legends", img : "assets/2.png" ,price: 20 },
    { id: 3, name: "Dark Summoning", img : "assets/3.png" ,price: 70 },
    { id: 4, name: "Lucky Pack", img : "assets/4,png" ,price: 100}
];
const cart = []
let somme = 0
let buttons = document.querySelectorAll(".add-cart")
let vide = document.getElementById("cartItems")
let total = document.getElementById("cartTotal")

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
    vide.innerHTML = ''
    for(let i = 0 ; i < cart.length ; i++){
        vide.innerHTML += `
        <div>
        <h3>${cart[i].name}</h3>
        <p>Prix : ${cart[i].price} DH</p>
        <img src="${cart[i].img} class="w-25 h-9"">
        </div>`
    }
    // console.log(cart)
}

// for(let i = 0 ; i < cart.length ; i++){
//     somme += cart[i].price
// }
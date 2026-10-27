const inventory = JSON.parse(localStorage.getItem('inventory')) || []
const colection = JSON.parse(localStorage.getItem('collection')) || []
const inventoryItems = document.getElementById('inventoryItems')
const revealedCards = document.getElementById('revealedCards')
const cards = [
    { id: 1, name: "Fire Wolf", type: "Creature", rarity: "Common", img: "assets/cards/1.png" },
    { id: 2, name: "Forest Archer", type: "Warrior", rarity: "Common", img: "assets/cards/2.png" },
    { id: 3, name: "Stone Golem", type: "Creature", rarity: "Common", img: "assets/cards/3.png" },
    { id: 4, name: "Water Spirit", type: "Spirit", rarity: "Common", img: "assets/cards/4.png" },
    { id: 5, name: "Dark Soldier", type: "Warrior", rarity: "Common", img: "assets/cards/5.png" },
    { id: 6, name: "Healing Fairy", type: "Spirit", rarity: "Common", img: "assets/cards/6.png" },
    { id: 7, name: "Shadow Knight", type: "Warrior", rarity: "Rare", img: "assets/cards/7.png" },
    { id: 8, name: "Thunder Mage", type: "Mage", rarity: "Rare", img: "assets/cards/8.png" },
    { id: 9, name: "Ice Dragon", type: "Creature", rarity: "Rare", img: "assets/cards/9.png" },
    { id: 10, name: "Ancient Guardian", type: "Spirit", rarity: "Rare", img: "assets/cards/10.png" },
    { id: 11, name: "Golden Phoenix", type: "Creature", rarity: "Legendary", img: "assets/cards/11.png" },
    { id: 12, name: "Eternal Dragon", type: "Creature", rarity: "Legendary", img: "assets/cards/12.png" }
];

function Create(id){
    let selec = inventory.find((item) => {
        return item.id === id
    })
    if(selec && selec.quantity > 0){
        revealedCards.innerHTML = `
        <div class="w-full sm:w-[220px] bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col gap-3">
        <img src="${selec.img}" alt="${selec.name}" class="w-full h-52 object-cover rounded-lg">
        <h3 class="text-xl font-bold text-gray-200">${selec.name}</h3>
        <p class="text-gray-400 text-sm">Boosters disponibles</p>
        <button onclick="Open(${selec.id})" class="open-inventory bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-lg mt-auto" data-id="${selec.id}">
        Ouvrir le booster
        </button>
        </div>
        `
    }
}
function Aff_inventory(){
    inventoryItems.innerHTML = ''
    inventory.forEach((inve) => {
        if(inve.quantity > 0){
            inventoryItems.innerHTML += `
            <div class="w-full sm:w-[220px] bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col gap-3">
                <img src="${inve.img}" alt="${inve.name}" class="w-full h-52 object-cover rounded-lg">
                <h3 class="text-xl font-bold text-gray-200">${inve.name}</h3>
                <p class="text-amber-400">Quantité : ${inve.quantity}</p>
                <p class="text-gray-400 text-sm">Boosters disponibles</p>
                <button onclick="Create(${inve.id})" class="open-inventory bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-lg mt-auto" data-id="${inve.id}">
                Ouvrir le booster
                </button>
            </div>
            `
        }
    })
    if(inventoryItems.innerHTML === ''){
        inventoryItems.innerHTML = `<p class="text-gray-400">Vous n'avez aucun booster pour le moment.</p>`
    }
}
function    Open(id){
    let select = inventory.find((item) => {
        return item.id === id
    })
    if(select && select.quantity > 0){
        select.quantity -= 1
        localStorage.setItem('inventory', JSON.stringify(inventory))
        Aff_inventory()
        let card_achete = []
        for(let i = 0 ; i < 5 ; i++){
            let random = Math.floor(Math.random() * cards.length)
            let card = cards[random]
            card_achete.push(card)
        }
        card_achete.forEach((card) => {
            colection.push(card)
        })
        localStorage.setItem('collection',JSON.stringify(colection))
        revealedCards.innerHTML = ''
        card_achete.forEach((card) => {
            revealedCards.innerHTML += `
            <div class="w-28 bg-gray-900 border border-amber-700 rounded-xl p-2">
                    <img src="${card.img}" alt="${card.name}" class="w-full h-36 object-cover rounded-lg">
                    <h3 class="text-xs font-bold text-center mt-2">${card.name}</h3>
                    <p class="text-xs text-amber-400 text-center mt-1">${card.rarity}</p>
            </div>`
        })
    }
}
Aff_inventory()
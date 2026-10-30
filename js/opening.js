const inventory = JSON.parse(localStorage.getItem('inventory')) || []
const colection = JSON.parse(localStorage.getItem('collection')) || []
const inventoryItems = document.getElementById('inventoryItems')
const revealedCards = document.getElementById('revealedCards')
const cards = [
    { id: 1, name: "Fire Wolf", type: "Creature", rarity: "Common", faction: "Tenebres", attack: 400, hp: 500, img: "assets/cards/1.png" },
    { id: 2, name: "Forest Archer", type: "Warrior", rarity: "Common", faction: "Lumiere", attack: 300, hp: 400, img: "assets/cards/2.png" },
    { id: 3, name: "Stone Golem", type: "Creature", rarity: "Common", faction: "Tenebres", attack: 250, hp: 850, img: "assets/cards/3.png" },
    { id: 4, name: "Water Spirit", type: "Spirit", rarity: "Common", faction: "Lumiere", attack: 200, hp: 600, img: "assets/cards/4.png" },
    { id: 5, name: "Dark Soldier", type: "Warrior", rarity: "Common", faction: "Tenebres", attack: 350, hp: 450, img: "assets/cards/5.png" },
    { id: 6, name: "Healing Fairy", type: "Spirit", rarity: "Common", faction: "Lumiere", attack: 150, hp: 500, img: "assets/cards/6.png" },
    { id: 7, name: "Shadow Knight", type: "Warrior", rarity: "Rare", faction: "Tenebres", attack: 550, hp: 600, img: "assets/cards/7.png" },
    { id: 8, name: "Thunder Mage", type: "Mage", rarity: "Rare", faction: "Lumiere", attack: 500, hp: 450, img: "assets/cards/8.png" },
    { id: 9, name: "Ice Dragon", type: "Creature", rarity: "Rare", faction: "Tenebres", attack: 650, hp: 700, img: "assets/cards/9.png" },
    { id: 10, name: "Ancient Guardian", type: "Spirit", rarity: "Rare", faction: "Lumiere", attack: 350, hp: 900, img: "assets/cards/10.png" },
    { id: 11, name: "Golden Phoenix", type: "Creature", rarity: "Legendary", faction: "Lumiere", attack: 800, hp: 750, img: "assets/cards/11.png" },
    { id: 12, name: "Eternal Dragon", type: "Creature", rarity: "Legendary", faction: "Tenebres", attack: 900, hp: 1000, img: "assets/cards/12.png" },
    { id: 13, name: "Light Paladin", type: "Warrior", rarity: "Common", faction: "Lumiere", attack: 350, hp: 600, img: "assets/cards/13.png" },
    { id: 14, name: "Dark Assassin", type: "Warrior", rarity: "Common", faction: "Tenebres", attack: 450, hp: 350, img: "assets/cards/14.png" },
    { id: 15, name: "Sun Priestess", type: "Mage", rarity: "Rare", faction: "Lumiere", attack: 400, hp: 650, img: "assets/cards/15.png" },
    { id: 16, name: "Night Reaper", type: "Creature", rarity: "Rare", faction: "Tenebres", attack: 650, hp: 550, img: "assets/cards/16.png" },
    { id: 17, name: "Celestial Knight", type: "Warrior", rarity: "Rare", faction: "Lumiere", attack: 600, hp: 750, img: "assets/cards/17.png" },
    { id: 18, name: "Abyss Demon", type: "Creature", rarity: "Rare", faction: "Tenebres", attack: 700, hp: 650, img: "assets/cards/18.png" },
    { id: 19, name: "Divine Seraph", type: "Spirit", rarity: "Legendary", faction: "Lumiere", attack: 850, hp: 900, img: "assets/cards/19.png" },
    { id: 20, name: "Shadow Overlord", type: "Creature", rarity: "Legendary", faction: "Tenebres", attack: 950, hp: 950, img: "assets/cards/20.png" }
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
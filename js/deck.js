const collection = JSON.parse(localStorage.getItem('collection')) || []
const deck = JSON.parse(localStorage.getItem('deck')) || []
const collectionItems = document.getElementById('collectionItems')
const deckItems = document.getElementById('deckItems')
const deckCount = document.getElementById('deckCount')

function Afficher_collection() {
    collectionItems.innerHTML = ''
    if (collection.length === 0) {
        collectionItems.innerHTML = '<p class="text-gray-400">Aucune carte disponible.</p>'
        return
    }
    collection.forEach((card, index) => {
        collectionItems.innerHTML += `
            <div class="text-center">
                <img src="${card.img}" alt="${card.name}" class="w-full rounded-lg mb-2">
                <button onclick="AddDeck(${index})" class="bg-amber-800 hover:bg-amber-700 px-3 py-2 rounded-lg text-xs w-full">
                    Ajouter +
                </button>
            </div>
        `
    })
}
function SaveDeck() {
    localStorage.setItem('deck', JSON.stringify(deck))
}
function AddDeck(index) {
    if (deck.length >= 20) {
        alert('Maximum 20 cartes dans le deck !')
        return
    }
    let card = collection[index]
    let collectionQuantity = 0
    let deckQuantity = 0
    collection.forEach((item) => {
        if (item.id === card.id) {
            collectionQuantity++
        }
    })
    deck.forEach((item) => {
        if (item.id === card.id) {
            deckQuantity++
        }
    })
    if (deckQuantity >= collectionQuantity) {
        alert("Vous n'avez plus de copies disponibles !")
        return
    }
    deck.push(card)
    SaveDeck()
    AfficherDeck()
}
function AfficherDeck() {
    deckItems.innerHTML = ''
    deckCount.textContent = deck.length + ' / 20'
    if (deck.length === 0) {
        deckItems.innerHTML = '<p class="text-gray-400">Votre deck est vide.</p>'
        return
    }
    deck.forEach((card, index) => {
        deckItems.innerHTML += `
            <div class="text-center">
                <img src="${card.img}" alt="${card.name}" class="w-full rounded-lg mb-2">
                <button onclick="RemoveDeck(${index})" class="bg-red-900 hover:bg-red-800 px-3 py-2 rounded-lg text-xs w-full">
                    Supprimer
                </button>
            </div>
        `
    })
}
function RemoveDeck(index) {
    deck.splice(index, 1)
    SaveDeck()
    AfficherDeck()
}
Afficher_collection()
AfficherDeck()
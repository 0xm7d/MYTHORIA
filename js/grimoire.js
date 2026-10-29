const collection = JSON.parse(localStorage.getItem('collection')) || []
const collectionItems = document.getElementById('collectionItems')
const cardDetails = document.getElementById('cardDetails')

function Afficher_collection() {
    collectionItems.innerHTML = ''
    if (collection.length === 0) {
        collectionItems.innerHTML = '<p class="text-amber-950">Aucune carte dans votre collection.</p>'
        return
    }
    collection.forEach((card, index) => {
        collectionItems.innerHTML += `
            <button onclick="ShowCard(${index})"
                class="w-full min-w-0 p-0 hover:scale-105 transition-transform">
                <img src="${card.img}" alt="${card.name}"
                    class="block w-full h-auto rounded-md">
            </button>`
    })
}
function ShowCard(index) {
    let card = collection[index]
    cardDetails.innerHTML = `
        <h3 class="text-3xl font-serif font-bold mb-5">${card.name}</h3>
        <img src="${card.img}" alt="${card.name}" class="w-60 h-80 object-contain rounded-lg mb-6">
        <div class="bg-amber-950/20 rounded-lg p-4 w-full max-w-[350px] text-center">
            <p class="text-lg">Type : ${card.type}</p>
            <p class="text-lg mt-2">Rareté : ${card.rarity}</p>
        </div>`
}
Afficher_collection()
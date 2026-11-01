const collection = JSON.parse(localStorage.getItem('collection')) || []
const collectionItems = document.getElementById('collectionItems')
const cardDetails = document.getElementById('cardDetails')
const typefilter = document.getElementById('typefilter')
const rarityFilter = document.getElementById('rarityFilter')
console.log(rarityFilter)
function Afficher_collection() {
    collectionItems.innerHTML = ''
    if (collection.length === 0) {
        collectionItems.innerHTML = '<p class="text-amber-950">Aucune carte dans votre collection.</p>'
        return
    }
    const selectedType = typefilter.value;
    const selectedRarity = rarityFilter.value;
    const filteredCards = collection.filter((card) => {
        const matchType = selectedType === 'all' || card.faction === selectedType || card.type === selectedType
        const matchRarity = selectedRarity === 'all' || card.rarity === selectedRarity
        return  matchType && matchRarity
    })
    if(filteredCards.length === 0){
        collectionItems.innerHTML = `<p class="col-span-4 text-amber-950">Aucune carte trouvee</p>`
        return
    }
    filteredCards.forEach((card) => {
        const index = collection.indexOf(card);
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
typefilter.addEventListener('change', Afficher_collection);
rarityFilter.addEventListener('change', Afficher_collection);
Afficher_collection()
window.Afficher_collection = Afficher_collection
window.ShowCard = ShowCard
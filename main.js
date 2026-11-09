import { cards } from "./cards.js";
import { gameState } from "./state.js";
import { AfficherHand , AfficherOpenentHand , Afficher_O_Battlefield , AfficherHP} from "./ui.js";
import { Add_O_hand, CallOppenentCard } from "./combat.js";
import { EndTurn , Coinflip , ChooseFaction} from "./turns.js";
const deck = JSON.parse(localStorage.getItem('deck')) || []
const end_turn = document.getElementById('end-turn')
const faction_choice = document.getElementById('faction-choice')
const btn_lumiere = document.getElementById('choose-light')
const btn_tunebres = document.getElementById('choose-dark')
end_turn.addEventListener('click',EndTurn)
const battleCards = deck.map((card, index) => {
    return {
        ...card,
        instanceId : index + 1,
        currentHp : card.hp,
        hasAttacked : false,
    }
})
gameState.player.deck = battleCards
// console.log(gameState.player.deck.length)
gameState.opponent.deck = gameState.player.deck.map(card => (
    {...card}
))
// console.log(gameState.opponent.deck.length)
for(let i = battleCards.length - 1 ; i > 0 ; i--){
    const j = Math.floor(Math.random() * (i + 1))
    let temp = battleCards[i]
    battleCards[i] = battleCards[j]
    battleCards[j] = temp
}
for(let i = 0 ; i < 5 ; i++){
    let handa = gameState.player.deck.pop()
    gameState.player.hand.push(handa)
}
for(let i = 0 ; i < 5 ; i++){
    const card = gameState.opponent.deck.pop()
    if(!card) 
        break
    gameState.opponent.hand.push(card)
}

Coinflip()
// console.log(gameState.coinwinner)
if(gameState.coinwinner === "player"){
    faction_choice.classList.remove('hidden')
    faction_choice.classList.add('flex')
}
else{
    ChooseFaction("Tenebres")
    CallOppenentCard()
    Add_O_hand()
    AfficherOpenentHand()
    Afficher_O_Battlefield()
    gameState.currentTurn = "player"
}
btn_lumiere.addEventListener('click', () => {
    ChooseFaction("Lumiere")
    faction_choice.classList.remove('flex')
    faction_choice.classList.add('hidden')
})
btn_tunebres.addEventListener('click', () => {
    ChooseFaction("Tenebres")
    faction_choice.classList.remove('flex')
    faction_choice.classList.add('hidden')
})

// console.log(gameState.opponent.hand.length)
// CallOppenentCard()
AfficherHand()
AfficherOpenentHand()
Afficher_O_Battlefield()
AfficherHP()
// console.log(gameState.opponent.hand.length)
// console.log(gameState.opponent.deck.length)
import { cards } from "./cards.js";
import { gameState } from "./state.js";
import { AfficherHand } from "./ui.js";
const deck = JSON.parse(localStorage.getItem('deck'))
const battleCards = deck.map((card, index) => {
    return {
        ...card,
        instanceId : index + 1,
        currentHp : card.hp,
        hasAttacked : false,
    }
})
gameState.player.deck = battleCards
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
AfficherHand()
console.log(gameState.player.hand)
console.log(gameState.player.hand.length)
console.log(gameState.player.deck.length)
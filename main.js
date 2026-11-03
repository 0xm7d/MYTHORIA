import { cards } from "./cards.js";
import { gameState } from "./state.js";
import { AfficherHand , AfficherOpenentHand , Afficher_O_Battlefield} from "./ui.js";
import { CallOppenentCard } from "./combat.js";
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
// console.log(gameState.opponent.hand.length)
// CallOppenentCard()
AfficherHand()
AfficherOpenentHand()
Afficher_O_Battlefield()
// console.log(gameState.opponent.hand.length)
// console.log(gameState.opponent.deck.length)
import { gameState } from "./state.js";
export function CallCard(index){
    if(gameState.player.battlefield.length >= 10)
        return
    if(!Number.isInteger(index) || index < 0 || index >= gameState.player.hand.length)
        return
    const removedCard = gameState.player.hand.splice(index,1)
    gameState.player.battlefield.push(removedCard[0])
}
export function AddCart_hand(){
    if(gameState.player.deck.length === 0 || gameState.player.hand.length >= 5)
        return
    if(gameState.player.hand.length < 5){
        const removeDeckCard = gameState.player.deck.pop()
        gameState.player.hand.push(removeDeckCard)
    }
}
export function CallOppenentCard(){
    if(gameState.opponent.battlefield.length >= 10)
        return
    if(gameState.opponent.hand.length === 0)
        return
    const carda = gameState.opponent.hand.pop()
    gameState.opponent.battlefield.push(carda)
}
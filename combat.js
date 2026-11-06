import { gameState } from "./state.js";
const end_turn = document.getElementById('end-turn')
export function CallCard(index){
    if(gameState.player.battlefield.length >= 10)
        return
    if(!Number.isInteger(index) || index < 0 || index >= gameState.player.hand.length)
        return
    if(gameState.hasDroped === true)
        return
    if(gameState.currentTurn === "player"){
        const removedCard = gameState.player.hand.splice(index,1)
        gameState.player.battlefield.push(removedCard[0])
        gameState.hasDroped = true
        end_turn.classList.remove('hidden')
    }
}
export function AddCart_hand(){
    if(gameState.player.deck.length === 0 || gameState.player.hand.length >= 5)
        return
    if(gameState.player.hand.length < 5){
        const removeDeckCard = gameState.player.deck.pop()
        gameState.player.hand.push(removeDeckCard)
    }
}
export function Add_O_hand(){
    if(gameState.opponent.deck.length === 0 || gameState.opponent.hand.length >= 5)
        return
    if(gameState.opponent.hand.length < 5){
        const removeOCard = gameState.opponent.deck.pop()
        gameState.opponent.hand.push(removeOCard)
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


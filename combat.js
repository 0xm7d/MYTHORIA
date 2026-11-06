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
        if (gameState.player.faction === null) return
        const removedCard = gameState.player.hand.splice(index,1)
        const card = applyFactionPenalty(removedCard[0],gameState.player.faction)
        gameState.player.battlefield.push(card)
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
    const card = applyFactionPenalty(carda , gameState.opponent.faction)
    gameState.opponent.battlefield.push(card)
}

export function applyFactionPenalty(card , playerfaction){
    const newCard = {...card}
    if(newCard.faction != playerfaction){
        newCard.attack = Math.floor(newCard.attack * 0.8)
        newCard.hp = Math.floor(newCard.hp * 0.8)
    }
    newCard.currentHp = newCard.hp
    return newCard
}

import { gameState } from "./state.js";
export function CallCard(index){
    if(gameState.player.battlefield.length >= 10)
        return
    if(!Number.isInteger(index) || index < 0 || index >= gameState.player.hand.length)
        return
    const removedCard = gameState.player.hand.splice(index,1)
    gameState.player.battlefield.push(removedCard[0])
}

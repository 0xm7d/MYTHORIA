import { gameState } from "./state.js"
import { CallCard } from "./combat.js"
const player_hand = document.getElementById('player-hand')
const player_battlefield = document.getElementById('player-battlefield')
export function AfficherHand(){
    player_hand.innerHTML = ''
    gameState.player.hand.forEach((card ,index) => {
        const img = document.createElement('img')
        img.src = card.img
        img.className = "h-36 flex-1 min-w-0 w-0 object-contain rounded-xl";
        img.addEventListener('click',() => {
            console.log('before',gameState.player.battlefield.length,
                gameState.player.hand.length
            )
            CallCard(index)
            AfficherHand()
            AfficherBattlefield()
            console.log('after',gameState.player.battlefield.length,
                gameState.player.hand.length
            )
        })
        player_hand.appendChild(img)
    })
}
export function AfficherBattlefield(){
    player_battlefield.innerHTML = ''
    for(let i = 0 ; i < 10 ; i++){
        const slot = document.createElement('div')
        slot.className = "h-22 border border-gray-600 bg-gray-300/20"
        const card = gameState.player.battlefield[i]
        if(card){
            const img = document.createElement('img')
            img.src = card.img
            img.className = "w-full h-full object-contain"
            slot.appendChild(img)
        }
        player_battlefield.appendChild(slot)
    }
}
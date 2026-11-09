import { gameState } from "./state.js";
export function OpponentAttack(){
    if(gameState.currentTurn !== 'opponent' || gameState.gameOver) return
    for(let i = 0 ; i < gameState.opponent.battlefield.length ; i++){
        let attacker = gameState.opponent.battlefield[i]
        if(attacker.hasAttacked === true) continue
        if(gameState.player.battlefield.length === 0){
            gameState.player.hp -= attacker.attack
            attacker.hasAttacked = true
            if(gameState.player.hp <= 0){
                gameState.gameOver = true
            }
            if(gameState.gameOver === true) break
            continue
        }
        let target = gameState.player.battlefield[0]
        target.currentHp -= attacker.attack
        attacker.hasAttacked = true
        if(target.currentHp <= 0)
        gameState.player.battlefield.splice(0,1)
    }
}
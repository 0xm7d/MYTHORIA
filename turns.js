import { gameState } from "./state.js";
import { AfficherOpenentHand , Afficher_O_Battlefield , AfficherBattlefield , AfficherHP} from "./ui.js";
import { CallOppenentCard ,Add_O_hand} from "./combat.js";
import { OpponentAttack } from "./opponent.js";
export function EndTurn(){
    if(gameState.currentTurn !== "player" || gameState.gameOver)return
    if (gameState.hasDroped === false) return
    gameState.currentTurn = "opponent"
    gameState.opponent.battlefield.forEach((card) => {
        card.hasAttacked = false
    })
    CallOppenentCard()
    OpponentAttack()
    AfficherHP()
    AfficherBattlefield()
    Add_O_hand()
    AfficherOpenentHand()
    Afficher_O_Battlefield()
    gameState.currentTurn = "player"
    gameState.player.battlefield.forEach((card) => {
        card.hasAttacked = false
    })
    gameState.hasDroped = false
    document.getElementById('end-turn').classList.add('hidden')
}
export function Coinflip(){
    const number = Math.random()
    if(number > 0.5){
        gameState.currentTurn = "player"
        gameState.coinwinner = "player"
    }
    else{
        gameState.currentTurn = "opponent"
        gameState.coinwinner = "opponent"
    }
}
export function ChooseFaction(faction){
    if(faction !== "Lumiere" && faction !== "Tenebres")
        return
    let rev_faction
    if(faction === "Lumiere")
        rev_faction = "Tenebres"
    else if(faction === "Tenebres")
        rev_faction = "Lumiere"
    if(gameState.coinwinner === "player"){
        gameState.player.faction = faction
        gameState.opponent.faction = rev_faction
    }
    else if(gameState.coinwinner === "opponent"){
        gameState.opponent.faction = faction
        gameState.player.faction = rev_faction
    }
}
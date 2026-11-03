import { gameState } from "./state.js";
import { CallCard } from "./combat.js";
import { AddCart_hand } from "./combat.js";
const player_hand = document.getElementById("player-hand");
const player_battlefield = document.getElementById("player-battlefield");
const add_card = document.getElementById("add-card");
const opponent_hand = document.getElementById('opponent-hand')
const opponent_battlefield = document.getElementById('opponent-battlefield')
export function AfficherHand() {
  player_hand.innerHTML = "";
  gameState.player.hand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = card.img;
    img.className = "h-36 flex-1 min-w-0 w-0 object-contain rounded-xl";
    img.addEventListener("click", () => {
      CallCard(index);
      AfficherHand();
      AfficherBattlefield();
    });
    player_hand.appendChild(img);
  });
}
export function AfficherBattlefield() {
  player_battlefield.innerHTML = ""
  for (let i = 0; i < 10; i++) {
    const slot = document.createElement("div")
    slot.className = "h-22 border border-gray-600 bg-gray-300/20"
    const card = gameState.player.battlefield[i]
    if (card) {
      const img = document.createElement("img")
      img.src = card.img
      img.className = "w-full h-full object-contain"
      slot.appendChild(img)
    }
    player_battlefield.appendChild(slot);
  }
}
export function  Afficher_O_Battlefield(){
  opponent_battlefield.innerHTML = ""
  for(let i = 0 ; i < 10 ; i++){
    const slot_2 = document.createElement("div")
    slot_2.className = "h-22 border border-gray-600 bg-gray-300/20"
    const card = gameState.opponent.battlefield[i]
    if(card){
      const img = document.createElement("img")
      img.src = card.img
      img.className = "w-full h-full object-contain"
      slot_2.appendChild(img)
    }
    opponent_battlefield.appendChild(slot_2)
  }
}
console.log(gameState.opponent.deck.length)
export function AfficherOpenentHand(){
  opponent_hand.innerHTML = ""
  gameState.opponent.hand.forEach(() => {
    const img = document.createElement('img')
    img.src = "assets/cards/back-card.png"
    img.className = "h-36 flex-1 min-w-0 w-0 object-cover rounded-xl border-2 border-yellow-600"
    img.addEventListener('click', () => {
      AfficherOpenentHand()
      Afficher_O_Battlefield()
    })
    opponent_hand.appendChild(img)
  })
}
add_card.addEventListener('click', () => {
  AddCart_hand()
  AfficherHand()
  })
export const gameState = {
    player : {
        hp : 3000,
        faction : null,
        hand: [],
        deck : [],
        battlefield : []
    },
    opponent : {
        hp : 3000,
        faction : null,
        hand : [],
        deck : [],
        battlefield : []
    },
    currentTurn : "player",
    coinwinner : null,
    gameOver : false,
    hasDroped : false,
}
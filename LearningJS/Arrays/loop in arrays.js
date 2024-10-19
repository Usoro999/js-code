//for-of loops
const players = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];
for (const item of players) {
  console.log(item);
};
for (const item of players.entries()) {
  console.log(item);
}
for (const [index,item] of players.entries()) {
  console.log(`${index + 1}: ${item}`);
}

// forEach loop
players.forEach(player => {
  console.log(player);
})

players.forEach(function (player, index, players){
  console.log(`${index+1} player's name is ${player}`)
})

// Created a Cricket Team with 11 players.
const players=["Hari","Raj","Ram","Nathan","James","Dinesh","Java","Script","siva","remo","april"];

console.log(players);

//Remove the player from the list.
players.shift();

console.log(players);

//Printing the size of the team. 
console.log(players.length);

//Adding a new player to the list.
players.push("dhoni");
console.log(players);
console.log(players.length);

//Sorting the players list
players.sort();
console.log(players);


//Displaying the players list with jersey number.
for(let i=0;i<players.length;i++)
{
    let jersey_number = Math.floor(Math.random()*100 + 1);
    console.log(players[i] +"- "+jersey_number);
}
//creating a new players list for printing jersey.
const new_players_list=[];

//Converting the players list to uppercase and storing the names in the new list.
for(let i=0;i<players.length;i++)
{
    new_players_list.push(players[i].toUpperCase());
}
console.log(new_players_list);
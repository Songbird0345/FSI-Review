

let dogVotes = localStorage.getItem('dogVotes');
if (dogVotes === null){
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}
document.querySelector("#doggo-votes").textContent = dogVotes;
let catVotes = localStorage.getItem('catVotes');
if (catVotes === null){
    catVotes = 0;
} else {
    catVotes = parseInt(catVotes)
}
document.querySelector("#catto-votes").textContent = catVotes;

let fishVotes = localStorage.getItem('fishVotes');
if (fishVotes === null){
    fishVotes = 0;
} else {
    fishVotes = parseInt(fishVotes)
}
document.querySelector("#fish-votes").textContent = fishVotes;


let doggoDiv = document.querySelector("#doggo");
let cattoDiv = document.querySelector("#catto");
let fishDiv = document.querySelector("#fish");

console.log(doggoDiv);
console.log(cattoDiv);
console.log(fishDiv);

let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = "Vote for Doggo";
doggoDiv.append(dogVoteBtn)
console.log(dogVoteBtn); 

dogVoteBtn.addEventListener('click', function(){
    dogVotes = dogVotes + 1;
    console.log(dogVotes)
    document.querySelector("#doggo-votes").textContent = dogVotes;
    localStorage.setItem('dogVotes', dogVotes);
})

let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = "Vote for Catto";
cattoDiv.append(catVoteBtn)
console.log(catVoteBtn); 

catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    console.log(catVotes)
    document.querySelector("#catto-votes").textContent = catVotes;
    localStorage.setItem('catVotes', catVotes);
})

let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = "Vote for Fish";
fishDiv.append(fishVoteBtn)
console.log(fishVoteBtn); 

fishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1;
    console.log(fishVotes)
    document.querySelector("#fish-votes").textContent = fishVotes;
    localStorage.setItem('fishVotes', fishVotes);
})


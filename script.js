const container = document.querySelector(".container");



const card = document.createElement("div");
card.className = "card";

// const front =  document.createElement("div");
// card.className = "card-side front";

// const back =  document.createElement("div");
// card.className = "card-side back ";

card.innerHTML =`

<div class = "card-side front"> Front </div>

<div class = "card-side back"> Back </div>






`;
container.appendChild(card);




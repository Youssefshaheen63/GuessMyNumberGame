"use strict";

// -------------------About--------------------------
const Aboutbtn = document.querySelector(".aboutbtn");
const About = document.querySelector(".about");

Aboutbtn.addEventListener("click", (e) => {
	About.style.display = "block";
});

// -------------------Rules--------------------------
const Rules = document.querySelector(".rules");
const Rulesbtn = document.querySelector(".rulesbtn");

Rulesbtn.addEventListener("click", (e) => {
	Rules.style.display = "block";
});

// ----------------------button--------------------
const closeicon = document.querySelector(".about .close");

closeicon.onclick = (e) => {
	About.style.display = "none";
};

const closeicon1 = document.querySelector(".rules .close");

closeicon1.onclick = (e) => {
	Rules.style.display = "none";
};

// -------------------Game Play Win and Lose-----------------------------
let number = Math.trunc(Math.random() * 20 + 1);
const StateCheck = function (message) {
	document.querySelector(".State").textContent = message;
};
const result = document.querySelector(".number");
let Score = 20;
let Highscore = 0;

document.querySelector(".check").addEventListener("click", (e) => {
	const valueInput = Number(document.querySelector(".valueinput").value);

	// No Input
	if (!valueInput) {
		StateCheck("No Number...");
	} else if (valueInput === number) {
		StateCheck("You Win! 🥇");
		result.textContent = number;
		document.body.style.backgroundColor = "green";
		if (Score > Highscore) {
			Highscore = Score;
			document.querySelector(".highscore").textContent = Highscore;
		}
	} else if (valueInput !== number) {
		if (Score > 1) {
			// if (valueInput > number) {
			// 	StateCheck("Too High 📈");
			// 	Score--;
			// 	document.querySelector(".score").textContent = Score;
			// } else if (valueInput < number) {
			// 	StateCheck("Too Low 📉");
			// 	Score--;
			// 	document.querySelector(".score").textContent = Score;
			// }

			StateCheck(valueInput > number ? "Too High 📈" : "Too Low 📉");
			Score--;
			document.querySelector(".score").textContent = Score;
		} else {
			StateCheck("You Lost! 😥");
			document.body.style.backgroundColor = "red";
			document.querySelector(".score").textContent = 0;
		}
	}
});

// -------------------Again button-----------------------------

const Again = document.querySelector(".again");

Again.addEventListener("click", (e) => {
	number = Math.trunc(Math.random() * 20 + 1);
	result.textContent = "?";
	StateCheck("Start Guessing...");
	document.querySelector(".valueinput").value = "";
	Score = 20;
	document.querySelector(".score").textContent = Score;
	document.querySelector("body").style.backgroundColor = "#222";
});

console.log(document.title);

// 1.
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

// 2.
document.querySelector(".infocard-list").style.backgroundColor = "black";

// 3.
console.log(location.href);

// 4.
console.log(location.hostname);

// 5.
console.log(document.querySelectorAll('img'));

// 6.
let cage = document.querySelectorAll('.img-sprite');
for (i = 0; i < cage.length; i++) {
    cage[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
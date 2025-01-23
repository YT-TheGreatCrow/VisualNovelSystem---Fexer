const lines = ["Purple-el és a skacikkal ", "És nagyba mennek a killek", "Purple mondja", "LOOK AT THE DAMAGE!", "Crow: aszongya 'LOOK AT THE DAMAGE' ", "I'm playing pacifist!", "mindenki elkezdett szakadni", "asztán aszongya 'hes a god'", "He saved will smith :D"];
const imgs = ["img1.jpg", "img1.jpg", "img1.jpg", "img2.png", "img1.jpg", "img2.png", "img1.jpg", "img1.jpg", "img1.jpg", "img2.png"]

let index = 0;

function LoadFirst(){
    document.getElementById("text").innerText = lines[0];
    document.getElementById("char").innerHTML = "<img src='"+imgs[0]+"' alt='Look at the damage! I'm playing pacifist!'>"
}

function NextLine() {
    index++;
    document.getElementById("text").innerText = lines[index];
    document.getElementById("char").innerHTML = "<img src='"+imgs[index]+"' alt='Look at the damage! I'm playing pacifist!'>"
}

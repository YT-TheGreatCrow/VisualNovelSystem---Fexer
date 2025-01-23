const lines = ["Én kurvára unom a Faur órát", "És nem tudom mit tegyek!!", "Van egy megoldás", "Torture!!!", "Ezzel a módszerrel minden problémád megoldódik!", "Felidegel az asszony? Torture!!", "Idegesít a szomszéd? Torture!!", "A Szegedi cigány vajda a seggedet akarja és nem hagynak békén ameddig nem adod oda a gyomrodat. De nem tudsz rendőröket hívni mert túlságosan cigánypártiak?", "Torture!!!"];
const imgs = ["img1.jpg", "img1.jpg", "img1.jpg", "img2.png", "img1.jpg", "img2.png", "img1.jpg", "img1.jpg", "img1.jpg", "img2.png"]

let index = 0;

function LoadFirst(){
    document.getElementById("text").innerText = lines[0];
    document.getElementById("char").innerHTML = "<img src='"+imgs[0]+"' alt='cig'>"
}

function NextLine() {
    index++;
    document.getElementById("text").innerText = lines[index];
    document.getElementById("char").innerHTML = "<img src='"+imgs[index]+"' alt='cig'>"
}
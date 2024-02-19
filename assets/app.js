let body = document.body;
let table = document.createElement('table');
let h1 = document.querySelector('h1');

let letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8"];

function damier() {

for (let i = 0; i < 8; i++) {
    let ligne = document.createElement('th');
    table.appendChild(ligne);
    if (i % 2 === 0) {
        ligne.style.backgroundColor = 'black';
        ligne.style.border = "solid black 1px";
        ligne.style.padding = "11px";
    } else {
        ligne.style.backgroundColor = 'white';
        ligne.style.border = "solid black 1px";
        ligne.style.padding = "11px";
    }

}
for (let y = 0; y < number.length; y++) {
    let colonne = document.createElement('tr');
    table.appendChild(colonne);
    if (y % 2 ===  0) {
        colonne.style.backgroundColor = 'white';
        colonne.style.border = 'solid black 1px';
        colonne.style.padding = "11px";
    } else {
        colonne.style.backgroundColor = 'black';
        colonne.style.border = 'solid black 1px';
        colonne.style.padding = "11px";
    }
    
}};
damier();
body.appendChild(table);
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';



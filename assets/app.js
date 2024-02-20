let body = document.body;
let table = document.createElement('table');
body.appendChild(table);

let letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
let number = [1, 2, 3, 4, 5, 6, 7, 8];


for (let i = 0; i < 9; i++) {
    let ligne = document.createElement('tr');
    table.appendChild(ligne);
    ligne.style.display = 'flex';
    ligne.style.flexDirection = 'row';

    for (let y = 0; y < 9; y++){
        let cellule = document.createElement('td');
        ligne.appendChild(cellule);

        if (y + i % 2 === 0 ) {
            cellule.style.backgroundColor = 'black'
        } else {
            cellule.style.backgroundColor = 'white'
        };

    };

};

table.style.flexDirection = 'row';

body.style.display =  'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center'


table.style.border = 'solid 1px black';

/*    if (i % 2 === 0) {
        let cellA = document.createElement('td');
        ligne.appendChild(cellA);
        cellA.style.backgroundColor = 'black';
        cellA.style.padding = "11px";
    } else {
        let cellB = document.createElement('td');
        ligne.appendChild(cellB);
        cellB.style.backgroundColor = 'white';
        cellB.style.padding = "11px";
    }
*/
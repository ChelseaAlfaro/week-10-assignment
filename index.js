let btnAdd = document.getElementById('add');
let table = document.getElementById('table')

let animalInput = document.getElementById("new-animal");
let typeInput = document.getElementById("new-animal-type");
let homeInput = document.getElementById("new-animal-home");


btnAdd.addEventListener('click', () => {
    let animal = animalInput.value;
    let type = typeInput.value;
    let home = homeInput.value;

    let template = `
            <tr>
                <td>${animal}</td>
                <td>${type}</td>
                <td>${home}</td>
            </tr>`
            
    table.innerHTML += template;
});
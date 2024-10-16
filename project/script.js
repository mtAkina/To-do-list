let dodaj = document.getElementById('dodaj');
let brisi = document.getElementById('brisi');
var toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let prekrizi = document.getElementById('prekrizi');
let stvar = document.getElementById('stvar');
var lista = document.getElementById('lista');

// dodaj.addEventListener('click', function () {
//     var paragraph = document.createElement('p');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     brisi.addEventListener('click', function () {
//         toDoContainer.removeChild(paragraph);
//     })
//     prekrizi.addEventListener('click', function () {
//         paragraph.style.textDecoration = 'line-through';
//     })
// })

// document.getElementById('dodaj').onclick = function () {
//     var toDoContainer = document.getElementById('toDoContainer');
//     var stvar = document.getElementsByClassName('stvar')[0];
//     toDoContainer.appendChild(stvar.cloneNode(true));
// }

document.getElementById('dodaj').onclick = function () {
    var lista = document.getElementById('lista');
    var stvar = document.getElementsByClassName('stvar')[0];
    lista.appendChild(stvar.cloneNode(true));
}
document.getElementById('brisi').onclick = function () {
    var lista = document.getElementById('lista');
    var tasks = document.getElementsByClassName('stvar'); // Get all tasks
    if (tasks.length > 0) {
        lista.removeChild(tasks[tasks.length - 1]); // Remove the last task
    }
}
function prekriziTekst() {
    var taskItem = document.getElementsByClassName('stvar')[0]; // Get the first 'stvar' element
    var inputField = taskItem.querySelector('#inputField'); // Select the input field inside that 'stvar'
    inputField.style.textDecoration = "line-through";
}

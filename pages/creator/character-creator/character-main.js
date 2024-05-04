
let i = 1;

let character_board = document.getElementById('character-container')

const addCharacter = () => {
    character_board.insertAdjacentHTML('beforeend', `<li id=${i} class="character-object"><a href='../character-manage-page/character-manage.html'><h1>temp ${i}</h1></a></li>`)
    i++;

}

// document.getElementById("add-character-button").addEventListener('click', addCharacter);


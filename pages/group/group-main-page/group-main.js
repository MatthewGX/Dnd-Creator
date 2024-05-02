// let groups = ['group 1', 'Group 2', 'Hello!', 'World!'];
// i = groups.length;
let i = 1;

let group_board = document.getElementById('group-container')

// for (let group of groups) {
//     group_board.innerHTML += '<li class="group-object"><h1>' + group + '</h1></li>'
// }

const addGroup = () => {
    group_board.insertAdjacentHTML('beforeend', `<li id=${i} class="group-object"><h1>temp ${i}</h1></li>`)
    // groups.push('temp ' + i);

    let button = document.getElementById(i);
    button.addEventListener('click', function(){
        button.remove();
        i--;
    });
    i++;

}

document.getElementById("add-group-button").addEventListener('click', addGroup);

// const removeGroup = (id) => {
//     document.getElementById(id).remove();
//     i--;
// }

// for (let group of document.getElementsByClassName('group_object')) {
//     group.addEventListener('click', removeGroup(group.id));
// }
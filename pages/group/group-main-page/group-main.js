// let groups = ['group 1', 'Group 2', 'Hello!', 'World!'];
// i = groups.length;
let i = 1;

let group_board = document.getElementById('group-container')

// for (let group of groups) {
//     group_board.innerHTML += '<li class="group-object"><h1>' + group + '</h1></li>'
// }

const addGroup = () => {
    group_board.insertAdjacentHTML('beforeend', `<li id=${i} class="group-object"><a href='../group-manage-page/group-manage.html'><h1>temp ${i}</h1></a></li>`)
    // groups.push('temp ' + i);

    // let button = document.getElementById(i);
    // button.addEventListener('click', function(){
    //     button.remove();
    //     i--;
    // });
    i++;

}

// document.getElementById("add-group-button").addEventListener('click', addGroup);

// const removeGroup = (id) => {
//     document.getElementById(id).remove();
//     i--;
// }

// for (let group of document.getElementsByClassName('group_object')) {
//     group.addEventListener('click', removeGroup(group.id));
// }





// code to let the created group appear on the group main page

// const removeGroup = (id) => {
//     document.getElementById(id).remove();
//     i--;
// }

// for (let group of document.getElementsByClassName('group_object')) {
//     group.addEventListener('click', removeGroup(group.id));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const groupBoard = document.getElementById('group-container');

//     const loadGroups = () => {
//         const groups = JSON.parse(localStorage.getItem('groups')) || [];
//         groups.forEach((group, index) => {
//             addGroup(group.groupName, index);
//         });
//     };

//     const addGroup = (groupName, index) => {
//         const groupHTML = `<li id="group-${index}" class="group-object">
//                               <a href='../group-manage-page/group-manage.html'>
//                                   <h1>${groupName}</h1>
//                               </a>
//                            </li>`;
//         groupBoard.insertAdjacentHTML('beforeend', groupHTML);
//     };


//     document.getElementById('add-group-button').addEventListener('click', () => {
//         const groupNameInput = document.getElementById('group-name');
//         const groupName = groupNameInput.value.trim();
//         const groups = JSON.parse(localStorage.getItem('groups')) || [];
//         groups.push({ groupName: groupName });
//         localStorage.setItem('groups', JSON.stringify(groups));
//         addGroup(groupName, groups.length - 1);
//         groupNameInput.value = ''; 
//     });

//     loadGroups();
// });

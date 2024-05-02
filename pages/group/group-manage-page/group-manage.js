let selectedTab = null;

let tabs = ['players', 'sheets', 'privacy'];

const selectActive = (tabID) => {
    // console.log(tabID);
    for (let tempID of tabs) {
        let tab = document.getElementById(`${tempID}Tab`);
        let screen = document.getElementById(tempID);

        if (tempID === tabID) {
            tab.className += 'active';
            screen.className += 'active';
        }
        else {
            tab.className = '';
            screen.className = 'screen';
        }
    }
}

for (let tabID of tabs) {
    let tab = document.getElementById(`${tabID}Tab`);
    tab.addEventListener('click', () => {selectActive(tabID);});
}



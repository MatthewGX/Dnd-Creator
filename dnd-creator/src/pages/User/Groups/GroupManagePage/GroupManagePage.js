// GroupManagePage.js

import { Link } from "react-router-dom";
import "./GroupManagePage.css";


var selectedTab = null;



// for (let tabID of tabs) {
//     let tab = document.getElementById(`${tabID}Tab`);
//     tab.addEventListener('click', () => {selectActive(tabID);});
// }

const GroupManagePage = () => {
  const tabs = ['players', 'sheets', 'roles'];

  const selectActive = (tabID) => {
      // console.log(tabID);
      console.log(tabs);
      for (let tempID of tabs) {
          let tab = document.getElementById(`${tempID}Tab`);
          let screen = document.getElementById(tempID);
          console.log(tab);
          if (tempID === tabID) {
              tab.className = 'screenTab active';
              screen.className = 'screen active';
          }
          else {
              tab.className = 'screenTab';
              screen.className = 'screen';
          }
          
          console.log(tab);
      }
  }
  return (
    <div className="group-manage-page">
      <div className="outer-container">
        <div className="inner-container">
          <div className="col">
            <ul>
              <li id="playersTab" className="screenTab">
                <button onClick={() => selectActive('players')}>Players</button>
              </li>
              <li id="sheetsTab" className="screenTab">
                <button onClick={() => selectActive('sheets')}>Sheets</button>
              </li>
              <li id="rolesTab" className="screenTab">
                <button onClick={() => selectActive('roles')}>Roles</button>
              </li>
            </ul>
          </div>
          <span id="info-screen" className="col">
            <div id="players" className="screen">
              <div className="inner-screen">
                <h1>Joined Players</h1>
                <div className="outer-group">
                  <ul className="inner-group">
                    <span id="group-container">
                      <li id='1' className="group-object"><h2>Player 1</h2></li>
                    </span>
                    <li id="add-player" className="group-object">
                      <Link to="add"><button id="add-player-button"><h1>Add New Player</h1></button></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="sheets" className="screen">
              <div className="inner-screen">
                <h1>Available Sheets</h1>
              </div>
            </div>
            <div id="roles" className="screen">
              <div className="inner-screen">
                <h1>Role Management</h1>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GroupManagePage;
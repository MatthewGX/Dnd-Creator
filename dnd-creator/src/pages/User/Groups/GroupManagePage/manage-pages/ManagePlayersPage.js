// ManagePlayersPage.js

import { Link } from "react-router-dom";

const ManagePlayersPage = () => {
  return (
    <div id="ManagePage">
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
  );
}

export default ManagePlayersPage
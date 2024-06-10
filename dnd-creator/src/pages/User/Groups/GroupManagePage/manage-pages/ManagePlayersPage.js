// ManagePlayersPage.js

import { Link } from "react-router-dom";
import GenericGroupContainer from "../../../../../components/generic-container/group-container";

const ManagePlayersPage = () => {
  return (
    <div id="ManagePage">
      <div className="inner-screen">
        <h1 className="pageTitle">Players</h1>
        <div className="outer-group">
          {/* <ul className="inner-group"> */}
            <GenericGroupContainer group={['Player 1']} linkUrl={undefined} addLink="add" />
            {/* <span id="group-container">
              <li className="group-object"><h2>Player 1</h2></li>
            </span>
            <li id="add-player" className="group-object">
              <Link to="add"><button id="add-player-button"><h1>Add New Player</h1></button></Link>
            </li> */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}

export default ManagePlayersPage
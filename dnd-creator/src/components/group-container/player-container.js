// group-container.js

import { Link, useParams } from "react-router-dom";
import { getGroupInfo, isAdmin, promotePlayerInGroup, removePlayerFromGroup } from "../../services/GroupMethods";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/UserMethods";

const PlayerContainer = (props) => {
  // Uses props.groups
  const groupId = useParams().id;
  const signedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [group, setGroup] = useState(undefined);
  const [isAdminFlag, setAdminFlag] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers().then(() => console.log(players));
    checkAdmin();
  }, []);


  const fetchPlayers = async () => {
    const group = await getGroupInfo(groupId)
    console.log(group);

    let playerList = [];
    for (let player of group.members) {
      console.log(player._id);
      const rPlayer = await getUserInfo(player._id);
      playerList.push(rPlayer);
    }

    setPlayers(playerList);  
  }

  const getOtherPlayers = () => {
    return players.filter((player) => player._id != signedInUser._id);
  }

  const checkAdmin = async () => {
    const response = await isAdmin(groupId, signedInUser._id);

    if (response == true) {
      console.log('yes');
      setAdminFlag(true);
    }
    else {
      console.log('no');
      setAdminFlag(false);
    }
  }

  const promotePlayer = async (playerId) => {
    const response = promotePlayerInGroup(groupId, playerId);
    response.then(() => checkAdmin());
  }

  const removePlayer = async (playerId) => {
    removePlayerFromGroup(groupId, playerId).then(() => fetchPlayers());
  }

  return (
    <>
      <ul className="inner-container" id="generic-container">
        {players && getOtherPlayers().map((player, index) => {
          return (
            <span key={index} id="group-container">
              <li id={index} className="group-object">
                <h1>{player.username}</h1>

                {isAdminFlag ? (
                  <>
                    <button onClick={() => removePlayer(player._id)}>remove</button>
                    <button onClick={() => promotePlayer(player._id)}>promote</button>
                  </>
                ) : ""}


              </li>
            </span>
          )
        })}
        <li id="add-group" className="group-object">
          <Link to='add'>
            <h1>New</h1>
          </Link>
        </li>
      </ul>
    </>
  );
}


export default PlayerContainer;
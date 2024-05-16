// GroupsMainPage.js

import { Link } from "react-router-dom";
import "./GroupsMainPage.css";

const GroupsMainPage = () => {
  return (
    <>
      <div class="outer-container">
        <ul class="inner-container">
          <span id="group-container">
            <li id='1' class="group-object"><Link to="group/1"><h1>Group 1</h1></Link></li>
          </span>
          <li id="add-group" class="group-object">
            <Link to='add'><button id="add-group-button"><h1>Add New Group</h1></button></Link>
          </li>
        </ul>
      </div >
    </>
  );
}

export default GroupsMainPage;
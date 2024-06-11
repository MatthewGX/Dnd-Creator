// group-container.js

import { Link } from "react-router-dom";

const GroupContainer = (props) => {
  // Uses props.groups

  const groups = props.group;
  const linkUrl = props.linkUrl;
  const addLink = props.addLink;

  return (
    <>
      <ul className="inner-container" id="generic-container">
        {groups && groups.map((group, index) => (
          <span key={index} id="group-container">
              <Link to={`group/${group._id}`}>
            <li id={index} className="group-object">
                <h1>{group.groupName}</h1>
                <p>{group.description}</p>
            </li>
            </Link>
          </span>
        ))}
        <li id="add-group" className="group-object">
          <Link to='add'>
            <h1>New</h1>
          </Link>
        </li>
      </ul>
    </>
  );
}


export default GroupContainer;
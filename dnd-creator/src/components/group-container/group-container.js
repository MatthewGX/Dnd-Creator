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
            <li id={index} className="group-object">
              <Link to={`${linkUrl}/${index + 1}`}>
                <h1>{group.groupName}</h1>
              </Link>
            </li>
          </span>
        ))}
        <li id="add-group" className="group-object">
          <Link to={addLink}>
            <h1>New</h1>
          </Link>
        </li>
      </ul>
    </>
  );
}


export default GroupContainer;
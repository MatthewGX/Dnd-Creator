import React from 'react';
import { Link } from 'react-router-dom';
import './group-container.css';

const GenericGroupContainer = (props) => {
  // Uses props.groups

  const group = props.group;
  const linkUrl = props.linkUrl;
  const addLink = props.addLink;

  return (
    <>
      <ul className="inner-container">
        {group.map((group, index) => (
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

export default GenericGroupContainer;

import React from 'react';
import { Link } from 'react-router-dom';
import { useGroups } from '../GroupContext/GroupContext';
import './GroupsMainPage.css';

const GroupsMainPage = () => {
  const { groups } = useGroups();

  return (
    <>
      <div className="outer-container">
        <ul className="inner-container">
          {groups.map((group, index) => (
            <span key={index} id="group-container">
              <li id={index} className="group-object">
                <Link to={`group/${index + 1}`}>
                  <h1>{group.groupName}</h1>
                </Link>
              </li>
            </span>
          ))}
          <li id="add-group" className="group-object">
            <Link to="add">
              <button id="add-group-button"><h1>Add New Group</h1></button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default GroupsMainPage;

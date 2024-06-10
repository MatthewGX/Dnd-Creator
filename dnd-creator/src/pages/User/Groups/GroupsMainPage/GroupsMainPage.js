import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGroups } from '../GroupContext/GroupContext';
import './GroupsMainPage.css';
import GenericGroupContainer from '../../../../components/generic-container/group-container';
import { getUserGroups } from '../../../../services/UserMethods';
import GroupContainer from '../../../../components/group-container/group-container';

const GroupsMainPage = () => {
  const { groups } = useGroups();
  
  const [group, setGroups] = useState([]);

  useEffect(() => {
    console.log('LOADING GROUPS');
    fetchData().then(() => {
      console.log('Groups:');
      console.log(group);
    });
  }, []);

  const fetchData = async () => {
    const test = await getUserGroups();
    console.log(test);
    setGroups(test);
  }

  return (
    <>
      <div className="outer-container" id="group-main-page">
        {/* <ul className="inner-container">
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
        </ul> */}

        {/* <GenericGroupContainer group={group.map((group) => {return group.groupName})} linkUrl='group' addLink='add' /> */}
        <GroupContainer group={group} linkUrl='group' addLink='add' />
      </div>
    </>
  );
}

export default GroupsMainPage;

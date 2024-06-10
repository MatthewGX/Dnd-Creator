import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useGroups } from '../GroupContext/GroupContext';
// import './GroupsMainPage.css';
import GenericGroupContainer from '../../../../components/generic-container/group-container';
import { getUserGroups, getUserSheets } from '../../../../services/UserMethods';
import GroupContainer from '../../../../components/group-container/group-container';
import SheetContainer from '../../../../components/group-container/sheet-container';

const SheetsMainPage = () => {
  // const { groups } = useGroups();
  
  const [sheet, setSheets] = useState([]);

  useEffect(() => {
    console.log('LOADING Sheets');
    fetchData().then(() => {
      console.log('Sheets:');
      console.log(sheet);
    });
  }, []);

  const fetchData = async () => {
    const test = await getUserSheets();
    console.log(test);
    setSheets(test);
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
        <SheetContainer sheets={sheet} />
      </div>
    </>
  );
}

export default SheetsMainPage;

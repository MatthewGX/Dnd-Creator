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
        <SheetContainer sheets={sheet} />
      </div>
    </>
  );
}

export default SheetsMainPage;

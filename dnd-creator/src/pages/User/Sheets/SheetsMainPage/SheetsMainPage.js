import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSheets } from '../SheetContext/SheetContext';
import './SheetsMainPage.css';
import GenericGroupContainer from '../../../../components/group-container/group-container';
import { getUserSheets } from '../../../../services/sheets';

const SheetsMainPage = () => {
  // const { sheets } = useSheets();

  const [ sheets, setSheets ] = useState([]);

  useEffect(() => {
    getUserSheets().then(data => setSheets(data));
  }, []);


  return (
    <div id="sheets-main-page">
      <div className="outer-container">
        <GenericGroupContainer group={sheets.map((sheet) => {return sheet.sheetName;})} linkUrl='sheet' addLink='add'/>

        {/* <ul className="inner-container">
          {sheets.map((sheet, index) => (
            <span key={index} id="sheet-container">
              <li id={index} className="sheet-object">
                <Link to={`sheet/${index + 1}`}>
                  <h1>{sheet.sheetName}</h1>
                </Link>
              </li>
            </span>
          ))}
          <li id="add-sheet" className="sheet-object">
            <Link to="add">
              <button id="add-sheet-button"><h1>Add New Sheet</h1></button>
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default SheetsMainPage;

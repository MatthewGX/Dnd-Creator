import React from 'react';
import { Link } from 'react-router-dom';
import { useSheets } from '../SheetContext/SheetContext';
import './SheetsMainPage.css';

const SheetsMainPage = () => {
  const { sheets } = useSheets();

  return (
    <div id="sheets-main-page">
      <div className="outer-container">
        <ul className="inner-container">
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
        </ul>
      </div>
    </div>
  );
}

export default SheetsMainPage;

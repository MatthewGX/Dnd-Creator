// group-container.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSheetInfo } from "../../services/SheetMethods";

const SheetContainer = (props) => {
  const sheets = props.sheets;
  console.log(props.sheets);

  // const [test, setTest] = useState(props.sheets);
  // const [sheets, setSheets] = useState([]);

  // useEffect(() => {
  //   fetchSheets(sheetIds).then(() => console.log(sheets));
  // }, []);

  // const fetchSheets = async (sheetIds) => {
  //   console.log(sheetIds);
  //   for (let sheetId of sheetIds) {
  //     console.log('test');
  //     const response = await getSheetInfo(sheetId);
  //     setSheets([...sheets, response]);
  //   }
  //   // setSheets(temp_sheets);

  // }

  return (
    <>
      <ul className="inner-container" id="generic-container">
        {sheets && sheets.map((sheet, index) => {
          console.log(sheets); return (
            <span key={index} id="group-container">
              <Link to={`sheet/${sheet._id}`}>
                <li id={index} className="group-object">
                  <h1>{sheet.name}</h1>
                </li>
              </Link>
            </span>
          )
        })}
        <li id="add-group" className="group-object">
          <Link to='add'>
            <h1>New</h1>
          </Link>
        </li>
      </ul>
    </>
  );
}


export default SheetContainer;
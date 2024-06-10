// group-container.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSheetInfo } from "../../services/SheetMethods";

const SheetContainer = (props) => {
  const sheets = props.sheets;

  return (
    <>
      <ul className="inner-container" id="generic-container">
        {sheets && sheets.map((sheet, index) =>
        (
          <span key={index} id="group-container">
            <Link to={`sheet/${sheet._id}`}>
              <li id={index} className="group-object">
                <h1>{sheet.name}</h1>
              </li>
            </Link>
          </span>
        )
        )}
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
// ManageSheetsPage.js

import { useEffect, useState } from "react";
import GenericGroupContainer from "../../../../../components/generic-container/group-container";
import { getGroupInfo, getGroupSheets } from "../../../../../services/GroupMethods";
import { useParams } from "react-router-dom";
import SheetContainer from "../../../../../components/group-container/sheet-container";

const ManageSheetsPage = () => {
  const groupId = useParams().id;

  const [sheetList, setSheetList] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getGroupSheets(groupId);
    console.log(response);
    setSheetList(response);
  }

  return (
    <div id="ManagePage">
      <div className="inner-screen">
        <h1 className="pageTitle">Sheets</h1>
        <div className="outer-group">
          {/* <GenericGroupContainer group={[]} addLink="creator" /> */}
          <SheetContainer sheets={sheetList} />
        </div>
      </div>
    </div>
  );
}

export default ManageSheetsPage
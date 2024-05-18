// ManageSheetsPage.js

import GenericGroupContainer from "../../../../../components/group-container/group-container";

const ManageSheetsPage = () => {
  return (
    <div id="ManagePage">
      <div className="inner-screen">
        <h1 className="pageTitle">Sheets</h1>
        <div className="outer-group">
          <GenericGroupContainer group={[]} addLink="creator" />
        </div>
      </div>
    </div>
  );
}

export default ManageSheetsPage
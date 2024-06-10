// SheetMethods.js

const baseURL = "http://localhost:4000/sheet/";

export const getSheetInfo = async (sheetId) => {
    return await fetch(baseURL + sheetId)
        .then(resp => resp.json());
}
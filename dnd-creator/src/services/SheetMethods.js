// SheetMethods.js

const baseURL = "http://localhost:4000/sheet/";

export const getSheetInfo = async (sheetId) => {
    const response = await fetch(baseURL + sheetId);
    const result = await response.json();
    return result;
}
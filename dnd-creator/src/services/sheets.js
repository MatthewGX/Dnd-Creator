// sheets.js

const baseURL = "http://localhost:4000/user/";

export const getUserSheets = async () => {
    const userID = JSON.parse(localStorage.getItem('loggedInUser'))._id;
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    return await fetch(baseURL + userID)
    .then(resp => resp.json())
    .then(data => data.characterIDs);
}

// sheets.js

import { getGroupInfo } from "./GroupMethods";

const baseURL = "http://localhost:4000/user/";

export const getUserSheets = async () => {
    const userID = JSON.parse(localStorage.getItem('loggedInUser'))._id;
    
    return await fetch(baseURL + userID)
    .then(resp => resp.json())
    .then(data => data.characterIDs);
}

export const getUserGroups = async () => {
    const userID = JSON.parse(localStorage.getItem('loggedInUser'))._id;
    
    // return await fetch(baseURL + userID)
    // .then(resp => resp.json())
    // .then(data => data.groupIDs);

    const response = await fetch(baseURL + userID);
    const result = await response.json();

    let groupList = [];
    for (let groupId of result.groupIDs) {
        const test = await getGroupInfo(groupId);
        groupList.push(test);
    }

    return groupList;
}

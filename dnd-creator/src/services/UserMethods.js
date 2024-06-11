// sheets.js

import { getGroupInfo } from "./GroupMethods";
import { getSheetInfo } from "./SheetMethods";

const baseURL = "http://localhost:4000/user/";
const findURL = "http://localhost:4000/user/find/"


export const getUserInfo = async (userID) => {
    return await fetch(findURL + userID)
        .then(resp => resp.json());
}

export const getUserSheets = async () => {
    const userID = JSON.parse(localStorage.getItem('loggedInUser'))._id;

    const response = await fetch(findURL + userID)
    const result = await response.json();
    
    let characterList = [];
    for (let characterId of result.characterIDs) {
        const test = await getSheetInfo(characterId);
        characterList.push(test);
    }

    return characterList;
}

export const getUserGroups = async () => {
    const userID = JSON.parse(localStorage.getItem('loggedInUser'))._id;

    // return await fetch(baseURL + userID)
    // .then(resp => resp.json())
    // .then(data => data.groupIDs);

    const response = await fetch(findURL + userID);
    const result = await response.json();

    let groupList = [];
    for (let groupId of result.groupIDs) {
        const test = await getGroupInfo(groupId);
        groupList.push(test);
    }

    return groupList;
}

export const getUserList = async () => {
    const response = await fetch(baseURL + 'userList');
    const data = await response.json();

    return data;
}

export const addGroupToPlayer = async (userId, groupId) => {
    const response = await fetch(baseURL + 'add-group', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: userId,
            groupId: groupId
        }),
    })
    console.log(response);
}

export const removeGroupFromPlayer = async (userId, groupId) => {
    const response = await fetch(baseURL + 'remove-group', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: userId,
            groupId: groupId
        }),
    })
    console.log(response);
}

export const addSheetToPlayer = async (userId, sheetId) => {
    const response = await fetch(baseURL + 'add-sheet', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: userId,
            sheetId: sheetId
        }),
    });

    console.log(response);
}
// GroupMethods.js

import { getSheetInfo } from "./SheetMethods";
import { addGroupToPlayer, removeGroupFromPlayer } from "./UserMethods";

const baseURL = "http://localhost:4000/group/";

export const getGroupInfo = async (groupId) => {
  return await fetch(baseURL + groupId)
    .then(resp => resp.json());
}

export const getGroupSheets = async (groupId) => {
  const response = await fetch(baseURL + groupId);
  const result = await response.json();
  
  let characterList = [];
  for (let characterId of result.sheets) {
      const test = await getSheetInfo(characterId);
      characterList.push(test);
  }

  return characterList;
}

export const isAdmin = async (groupId, playerId) => {
  const data = await fetch(baseURL + groupId).then(resp => resp.json());
  return data.admin._id === playerId;
}

export const addPlayerToGroup = async (groupId, userId) => {
  const response = await fetch(baseURL + `${groupId}/addMember`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId
    }),
  });
  console.log(response);

  if (response.ok) {
    addGroupToPlayer(userId, groupId);
  }
}

export const removePlayerFromGroup = async (groupId, userId) => {
  console.log('REMOVING' + userId);

  const response = await fetch(baseURL + 'removeUser', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      groupId: groupId
    }),
  });

  if (response.ok) {
    console.log('REMOVED');

    removeGroupFromPlayer(userId, groupId);

    return response;
  }
}

export const promotePlayerInGroup = async (groupId, userId) => {
  console.log('PROMOTING' + userId);

  const response = await fetch(baseURL + 'promote', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      groupId: groupId
    }),
  });

  // console.log(response);

  if (response.ok) {
    console.log('PROMOTED');
    return response;
  }
}

export const addSheetToGroup = async (groupId, sheetId) => {
  const response = await fetch(baseURL + `${groupId}/addSheet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sheetId: sheetId
    }),
  });
  console.log(response);
}

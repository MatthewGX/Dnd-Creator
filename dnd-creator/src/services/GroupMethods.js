// GroupMethods.js

const baseURL = "http://localhost:4000/group/";

export const getGroupInfo = async (groupId) => {
    return await fetch(baseURL + groupId)
    .then(resp => resp.json());
}
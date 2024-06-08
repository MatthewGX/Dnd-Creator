// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGroups } from '../GroupContext/GroupContext';
// import './GroupAddPage.css';

// const GroupAddPage = ({currentUser}) => { //change here
//   const [groupName, setGroupName] = useState('');
//   const [players, setPlayers] = useState('');
//   const [description, setDescription] = useState('');
//   const { addGroup } = useGroups();
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const newGroup = { groupName, members: players.split(',').map(player => player.trim()),
//      description, admin: currentUser._id};  // change here 
//     try {
//       await addGroup(newGroup);
//       navigate('/user/groups');
//     } catch (error) {
//       console.error('Failed to create group:', error);
//     }
//   };

//   return (
//     <div className="group-add-page">
//       <main>
//         <form id="create-group-form" onSubmit={handleSubmit}>
//           <label htmlFor="group-name">Group Name:</label>
//           <input
//             type="text"
//             id="group-name"
//             name="group-name"
//             placeholder="Placeholder"
//             value={groupName}
//             onChange={(e) => setGroupName(e.target.value)}
//           />

//           <label htmlFor="players">Players:</label>
//           <input
//             type="text"
//             id="players"
//             name="players"
//             placeholder="JohnDoe142, EpicUser11"
//             value={players}
//             onChange={(e) => setPlayers(e.target.value)}
//           />

//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             placeholder="Group Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default GroupAddPage;

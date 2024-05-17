// WikiPage.js

// import { Link, Outlet } from "react-router-dom";
// import "./WikiPage.css";
// import Glossary from "../../../components/glossary/Glossary";

// let selectedTab = null;

// let tabs = ['classes', 'races', 'attributes', 'backgrounds', 'alignments'];

// let tables = {'classes': ['Bard', 'Cleric', 'Monk', 'Paladin', 'Barbarian', 'Druid', 'Fighter', 'Ranger', 'Rogue', 'Magician', 'Warlock', 'Artificer', 'Wizard'],
//                 'attributes': ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'],
//                 'backgrounds': [],
//                 'alignments': ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'],
//                 'races': ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling']}

// const selectActive = (tabID) => {
//     // console.log(tabID);
//     for (let tempID of tabs) {
//         let tab = document.getElementById(`${tempID}Tab`);
//         let screen = document.getElementById(tempID);

//         if (tempID === tabID) {
//             tab.className += 'active';
//             screen.className += 'active';
//         }
//         else {
//             tab.className = '';
//             screen.className = 'screen';
//         }
//     }
// }

// for (let tabID of tabs) {
//     let tab = document.getElementById(`${tabID}Tab`);
//     tab.addEventListener('click', () => {selectActive(tabID);});

//     let screen = document.getElementById(tabID);
//     for (let item of tables[tabID]) {
//         screen.getElementsByTagName('ol')[0].insertAdjacentHTML('beforeend', `<li>${item}</li>`);
//     }
// }

// MATT WORK
// const pages = {'Classes': 'classes', 'Races': 'races', 'Attributes': 'attributes', 'Backgrounds': 'backgrounds', 'Alignments': 'alignments'}

// const WikiGlossary = () => {
//   return (
//     <div id="wiki">
//       <div class="outer-container">
//         <Glossary glossary={pages} />
//       </div>
//     </div>
//   );
// }

// export default WikiGlossary;
// END

// const WikiPage = () => {
//     return (
//         <h1>WIKI PAGE</h1>
//     );
// }

// export default WikiPage;

import React, { useState } from 'react';
import './WikiPage.css';

const WikiPage = () => {
    const [activeTab, setActiveTab] = useState('classes');
    
    const tabs = ['classes', 'races', 'attributes', 'backgrounds', 'alignments'];
    const tables = {
        classes: ['Bard', 'Cleric', 'Monk', 'Paladin', 'Barbarian', 'Druid', 'Fighter', 'Ranger', 'Rogue', 'Magician', 'Warlock', 'Artificer', 'Wizard'],
        attributes: ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'],
        backgrounds: [],
        alignments: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'],
        races: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling']
    };

    const selectTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="wiki" className="outer-container">
            <div className="inner-containers">
                <div className="col">
                    <ul>
                        {tabs.map(tab => (
                            <li 
                                key={tab} 
                                id={`${tab}Tab`} 
                                className={tab === activeTab ? 'active' : ''} 
                                onClick={() => selectTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>
                <span id="info-screen" className="col">
                    {tabs.map(tab => (
                        <div key={tab} id={tab} className={`screen ${tab === activeTab ? 'active' : ''}`}>
                            <div className="inner-screen">
                                <h1>Available {tab.charAt(0).toUpperCase() + tab.slice(1)}</h1>
                                <ol>
                                    {tables[tab].map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default WikiPage;


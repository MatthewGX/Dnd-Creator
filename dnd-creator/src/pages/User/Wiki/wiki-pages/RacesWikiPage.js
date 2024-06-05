// RacesWikiPage.js

import { useEffect, useState } from "react";

const defaultRaces = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];

const RacesWikiPage = () => {
  // let races = defaultRaces;

  const [races, setRaces] = useState([]);
  const [currRace, setCurrRace] = useState(undefined);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/races').then(resp => resp.json().then(races => setRaces(races.results)), () => setRaces(defaultRaces));
  }, [])


  const setRace = (race) => {
    fetch("https://www.dnd5eapi.co/api/races/" + race.index).then(resp => resp.json().then(json => {
      console.log(json);
      setCurrRace(json);
    }));
  }

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Races</h1>
      {console.log(races)}
      <ol>
        {races.map((item) => (
          <li onClick={() => setRace(item)}>{item.name}</li>
        ))}
      </ol>

      <br></br>

      {currRace ? (
        <div className="info-pane">
          <h2>{currRace.name}</h2>
          <p><b>Age:</b> {currRace.age}</p>
          <p><b>Size:</b> {currRace.size}</p>
          <p>{currRace.size_description}</p>
          <p><b>Alignment:</b> {currRace.alignment}</p>
          <p><b>Subraces:</b></p>
          <ul>
            {currRace.subraces.map(subrace => <li>{subrace.name}</li>)}
          </ul>
        </div>
      ) : ""}
    </div>
  );
}

export default RacesWikiPage;
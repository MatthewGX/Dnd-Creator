// ClassesWikiPage.js

import { useEffect, useState } from "react";

const defaultClasses = ['Bard', 'Cleric', 'Monk', 'Paladin', 'Barbarian', 'Druid', 'Fighter', 'Ranger', 'Rogue', 'Magician', 'Warlock', 'Artificer', 'Wizard'];

const ClassesWikiPage = () => {
  // let classes = defaultClasses;

  const [classes, setClasses] = useState([]);
  const [currClass, setCurrClass] = useState(undefined);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/classes').then((resp) => {
      resp.json().then(data => {
        console.log(data)
        setClasses(data.results);
      });
    }, () => {
      setClasses(defaultClasses);
    });
  }, []);

  const setClass = (item) => {
    fetch("https://www.dnd5eapi.co/api/classes/" + item.index).then(resp => resp.json().then(json => {
      console.log(json);
      setCurrClass(json);
    }));
  }

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Classes</h1>
      <ol>
        {classes.map((item, index) => (
          <li onClick={() => setClass(item)} key={index}>{item.name}</li>
        ))}
      </ol>
      {/* <h3>{currClass}</h3> */}
      <br></br>
      {currClass ? (
        <div id="class-info-screen" className='info-pane'>
          <h2>{currClass.name}</h2>
          <p><b>Hit Die:</b> {currClass.hit_die}</p>
          <p><b>Proficiencies:</b> </p>
          <ul id="proficiencyList">
            {console.log(currClass.proficiencies)}
            {currClass.proficiencies.map((prof, index) => (
              // <h1>test</h1>
              <li key={index}>{prof.name}</li>
            ))}
            {console.log(currClass.proficiencies)}
          </ul>
          <p><b>Starting Equipment:</b> </p>
          <ul id="startingEquipList">
            {currClass.starting_equipment.map((item, index) => (
              <li key={index}>{item.equipment.name} x {item.quantity}</li>
            ))}
          </ul>
          <p><b>Sub-Classes:</b></p>
          <ul>
            {currClass.subclasses.map((subclass, index) => (<li key={index}>{subclass.name}</li>))}
          </ul>
        </div>
      ) : ""}

    </div>
  );
}

export default ClassesWikiPage;
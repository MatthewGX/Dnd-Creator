import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSheets } from '../SheetContext/SheetContext';
import './SheetAddPage.css';
import { getSheetInfo } from '../../../../services/SheetMethods';

const SheetAddPage = () => {
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    if (id) {
      console.log('LOADING CHARACTER');
      loadCharacter();
    }
  }, []);

  const loadCharacter = async () => {
    const response = await getSheetInfo(id);

    setCharacterInfo({
      class: response.class,
      alignment: response.alignment,
      background: response.background,
      exp: response.experiencePoints,
      race: response.race,
      name: response.name,
      attacks: response.attacks,
      features: response.features
    })

    setStrValue(response.strength);
    setDexValue(response.dexterity);
    setConValue(response.constitution);
    setIntValue(response.intelligence);
    setWisValue(response.wisdom);
    setChaValue(response.charisma);
  }

  const [strValue, setStrValue] = useState(10);
  const [dexValue, setDexValue] = useState(10);
  const [conValue, setConValue] = useState(10);
  const [intValue, setIntValue] = useState(10);
  const [wisValue, setWisValue] = useState(10);
  const [chaValue, setChaValue] = useState(10);
  const [characterInfo, setCharacterInfo] = useState({
    class: '',
    background: '',
    exp: '',
    race: '',
    alignment: '',
    name: '',
    attacks: '',
    features: ''
  });

  const { addSheet } = useSheets();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'str-input':
        setStrValue(value);
        document.getElementById('str-mod').innerText = Math.floor((value - 10) / 2);
        break;
      case 'dex-input':
        setDexValue(value);
        document.getElementById('dex-mod').innerText = Math.floor((value - 10) / 2);
        break;
      case 'con-input':
        setConValue(value);
        document.getElementById('con-mod').innerText = Math.floor((value - 10) / 2);
        break;
      case 'int-input':
        setIntValue(value);
        document.getElementById('int-mod').innerText = Math.floor((value - 10) / 2);
        break;
      case 'wis-input':
        setWisValue(value);
        document.getElementById('wis-mod').innerText = Math.floor((value - 10) / 2);
        break;
      case 'cha-input':
        setChaValue(value);
        document.getElementById('cha-mod').innerText = Math.floor((value - 10) / 2);
        break;
      default:
        console.log('changing ' + id);
        setCharacterInfo({ ...characterInfo, [id]: value });
        break;
    }
  };

  const createSheet = async (event) => {
    event.preventDefault();
    const newSheet = {
      ...characterInfo,
      strength: strValue,
      dexterity: dexValue,
      constitution: conValue,
      intelligence: intValue,
      wisdom: wisValue,
      charisma: chaValue,
      owner: JSON.parse(localStorage.getItem('loggedInUser'))._id
    };

    if (id == undefined) {
      const response = await fetch('http://localhost:4000/sheet/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSheet),
      });

      if (response.ok) {
        const createdSheet = await response.json();
        addSheet(createdSheet);
        navigate('/user/sheets');
      } else {
        console.error('Error creating character sheet');
      }
    }
    else {
      console.log('patching')
      newSheet.sheetId = id
      // console.log(JSON.stringify(newSheet))
      const response = await fetch('http://localhost:4000/sheet/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSheet),
      });

      if (response.ok) {
        navigate('/user/sheets');
      } else {
        console.error('Error creating character sheet');
      }
    }

  };

  return (
    <div className="sheet-add-page">
      <form onSubmit={createSheet}>
        <div className="container">
          <div className="statCol">
            <div className="stat">
              <div className="circle">
                <input
                  id="str-input"
                  className="userInput"
                  type="number"
                  min="0"
                  max="30"
                  name="strValue"
                  value={strValue}
                  onChange={handleInputChange}
                />
                <span>Strength</span>
              </div>
              <div id="str-mod" className="rectangle">0</div>
            </div>

            <div className="stat">
              <div className="circle">
                <input
                  id="dex-input"
                  className="userInput"
                  type="number"
                  min="0"
                  max="30"
                  name="dexValue"
                  value={dexValue}
                  onChange={handleInputChange}
                />
                <span>Dexterity</span>
              </div>
              <div id="dex-mod" className="rectangle">0</div>
            </div>

            <div className="stat">
              <div className="circle">
                <input
                  id="con-input"
                  className="userInput"
                  type="number"
                  min="0"
                  max="30"
                  name="conValue"
                  value={conValue}
                  onChange={handleInputChange}
                />
                <span>Constitution</span>
              </div>
              <div id="con-mod" className="rectangle">0</div>
            </div>

            <div className="stat">
              <div className="circle">
                <input
                  id="int-input"
                  className="userInput"
                  type="number"
                  min="0"
                  max="30"
                  name="intValue"
                  value={intValue}
                  onChange={handleInputChange}
                />
                <span>Intelligence</span>
              </div>
              <div id="int-mod" className="rectangle">0</div>
            </div>

            <div className="stat">
              <div className="circle">
                <input
                  id="wis-input"
                  className="userInput"
                  type="number"
                  min="0"
                  max="30"
                  name="wisValue"
                  value={wisValue}
                  onChange={handleInputChange}
                />
                <span>Wisdom</span>
              </div>
              <div id="wis-mod" className="rectangle">0</div>
            </div>

            <div className="stat">
              <div className="circle">
                <input
                  id="cha-input"
                  className="userInput"
                  type="number"
                  min="0"
                  max="30"
                  name="chaValue"
                  value={chaValue}
                  onChange={handleInputChange}
                />
                <span>Charisma</span>
              </div>
              <div id="cha-mod" className="rectangle">0</div>
            </div>
          </div>

          <div className="col2">
            <div className="containerTop">
              <div className="infoSection">
                <div className="infoLeft">Character Sheet</div>
                <div className="infoRight">
                  <div className="textbox-container">
                    <span>Class</span>
                    <div className="textbox">
                      <input id="class" className="userInput" type="text" value={characterInfo.class} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="textbox-container">
                    <span>Background</span>
                    <div className="textbox">
                      <input id="background" className="userInput" type="text" value={characterInfo.background} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="textbox-container">
                    <span>Exp</span>
                    <div className="textbox">
                      <input id="exp" className="userInput" type="text" value={characterInfo.exp} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="textbox-container">
                    <span>Race</span>
                    <div className="textbox">
                      <select id="race" className="userInput" value={characterInfo.race} onChange={handleInputChange}>
                        <option value="Human">Human</option>
                        <option value="Elf">Elf</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Half-Elf">Half-Elf</option>
                        <option value="Half-Orc">Half-Orc</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Tiefling">Tiefling</option>
                        <option value="Dragonborn">Dragonborn</option>
                        <option value="Goliath">Goliath</option>
                      </select>
                    </div>
                  </div>
                  <div className="textbox-container">
                    <span>Alignment</span>
                    <div className="textbox">
                      <input id="alignment" className="userInput" type="text" value={characterInfo.alignment} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="textbox-container">
                    <span>Name</span>
                    <div className="textbox">
                      <input id="name" className="userInput" type="text" value={characterInfo.name} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="containerSide">
                <textarea id="attacks" className="half-width-textarea" placeholder="ATTACKS & SPELLCASTING" value={characterInfo.attacks} onChange={handleInputChange} />
                <textarea id="features" className="half-width-textarea" placeholder="FEATURES & TRAITS" value={characterInfo.features} onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Create Character Sheet</button>
      </form>
    </div>
  );
};

export default SheetAddPage;

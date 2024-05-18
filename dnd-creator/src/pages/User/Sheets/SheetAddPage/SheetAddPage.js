import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSheets } from '../SheetContext/SheetContext';
import './SheetAddPage.css';

const SheetAddPage = () => {
  const [strValue, setStrValue] = useState(10);
  const [dexValue, setDexValue] = useState(10);
  const [conValue, setConValue] = useState(10);
  const [intValue, setIntValue] = useState(10);
  const [wisValue, setWisValue] = useState(10);
  const [chaValue, setChaValue] = useState(10);

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
        break;
    }
  };

  return (
    <div className="sheet-add-page">
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
              <div className="infoLeft">Top Left Block</div>
              <div className="infoRight">
                <div className="textbox-container">
                  <span>Class</span>
                  <div className="textbox">
                    <input className="userInput" type="text" />
                  </div>
                </div>
                <div className="textbox-container">
                  <span>Background</span>
                  <div className="textbox">
                    <input className="userInput" type="text" />
                  </div>
                </div>
                <div className="textbox-container">
                  <span>Exp</span>
                  <div className="textbox">
                    <input className="userInput" type="text" />
                  </div>
                </div>
                <div className="textbox-container">
                  <span>Race</span>
                  <div className="textbox">
                    <input className="userInput" type="text" />
                  </div>
                </div>
                <div className="textbox-container">
                  <span>Alignment</span>
                  <div className="textbox">
                    <input className="userInput" type="text" />
                  </div>
                </div>
                <div className="textbox-container">
                  <span>Name</span>
                  <div className="textbox">
                    <input className="userInput" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="containerSide">
              <textarea
                className="half-width-textarea"
                placeholder="Left Text"
              />
              <textarea
                className="half-width-textarea"
                placeholder="Right Text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SheetAddPage2 = () => {
  const [sheetName, setSheetName] = useState('');
  const [players, setPlayers] = useState('');
  const [description, setDescription] = useState('');
  const { addSheet } = useSheets();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSheet = { sheetName, players, description };
    addSheet(newSheet);
    navigate('/user/sheets');
  };
};

export default SheetAddPage;

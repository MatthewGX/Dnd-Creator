// BackgroundsWikiPage.js

import { useEffect, useState } from "react";

const defaultBackgrounds = ['Acolyte'];

const BackgroundsWikiPage = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [isOffline, setOffline] = useState(true);
  const [currBack, setCurrBackground] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api/backgrounds");

    if (response.ok) {
      const results = await response.json();

      for (let background of results.results) {
        const backJSON = await (await fetch("https://www.dnd5eapi.co/api/backgrounds/" + background.index)).json();

        setBackgrounds([...backgrounds, backJSON]);
      }

      setOffline(false);
    }
  }

  const setBackgroundDebug = (background) => {
    console.log(background);
    setCurrBackground(background);
  }

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Backgrounds</h1>
      <ol>
        {!isOffline ?
          backgrounds.map((item, index) => (
            <li onClick={() => setBackgroundDebug(item)} key={index}>{item.name}</li>
          ))
          :
          defaultBackgrounds.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ol>

      <br></br>

      {currBack ? (
        <div className="info-pane">
          <h2>{currBack.name}</h2>

          <p><b>Flaws:</b> Choose {currBack.flaws.choose}</p>
          <ul style={{ display: 'inline', paddingLeft: '0px' }}>
            {currBack.flaws.from.options.map((item, index) => {
              return <li key={index}>{item.string}</li>
            })}
          </ul>

          <br></br>

          <p><b>Ideals:</b> Choose {currBack.ideals.choose}</p>
          <ul style={{ display: 'inline', paddingLeft: '0px' }}>
            {currBack.ideals.from.options.map((item, index) => {
              return <li key={index}>{item.desc}</li>
            })}
          </ul>
        </div>
      ) : ""}
    </div>
  );
}

export default BackgroundsWikiPage;
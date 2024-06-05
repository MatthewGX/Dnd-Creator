// AlignmentsWikiPage.js

import { useEffect, useState } from "react";

const defaultAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

const AlignmentsWikiPage = (props) => {
  // let alignments = defaultAlignments;
  const [alignments, setAlignments] = useState([]);
  const [currAlignment, setCurrAlignment] = useState(undefined);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/alignments').then((resp) => {
      resp.json().then(data => {
        console.log(data)
        setAlignments(data.results);
      });
    }, () => {
      setAlignments(defaultAlignments);
    });
  }, []);

  const setAlignment = (item) => {
    fetch("https://www.dnd5eapi.co/api/alignments/" + item.index).then(resp => resp.json().then(json => {
      console.log(json);
      setCurrAlignment(json);
    }));
  }

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Alignments</h1>
      <ol>
        {alignments.map((item, index) => (
          <span key={index}>
            <li onClick={() => setAlignment(item)}>{item.name}</li>
          </span>
        ))}
      </ol>

      <br></br>

      {currAlignment ? (
        <div id="alignment-info-screen" className="info-pane">
          <h2>{currAlignment.name}</h2>
          <p>{currAlignment.desc}</p>
        </div>
      ) : ("")}
    </div>
  );
}

export default AlignmentsWikiPage;
// AlignmentsWikiPage.js

import { useEffect, useState } from "react";

const defaultAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

const AlignmentsWikiPage = (props) => {
  // let alignments = defaultAlignments;
  const [alignments, setAlignments] = useState([]);
  const [currDesc, setCurrDesc] = useState("");

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

  const setDesc = (item) => {
    fetch("https://www.dnd5eapi.co/api/alignments/" + item.index).then(resp => resp.json().then(json => {
      console.log(json);
      setCurrDesc(json.desc);
    }));
  }

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Alignments</h1>
      <ol>
        {alignments.map((item, index) => (
          <span key={index}>
            <li onClick={() => setDesc(item)}>{item.name}</li>
          </span>
        ))}
      </ol>
      <h3>{currDesc}</h3>
    </div>
  );
}

export default AlignmentsWikiPage;
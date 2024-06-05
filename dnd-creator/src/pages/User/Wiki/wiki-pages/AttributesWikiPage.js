// AttributesWikiPage.js

import { useEffect, useState } from "react";

const defaultAttributes = ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'];

const AttributesWikiPage = () => {
  // let attributes = defaultAttributes;

  const [attributes, setAttributes] = useState([]);
  const [currAttribute, setCurrAttribute] = useState(undefined);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/ability-scores').then(async (resp) => {
      setAttributes([]);
      resp.json().then(async data => {
        // console.log(data)
        // setAttributes(data.results);


        data.results.forEach(async element => {
          fetch('https://www.dnd5eapi.co/api/ability-scores/' + element.index).then((resp) => resp.json().then(json => {
            console.log(json);
            setAttributes(old => [...old, json]);
          }))
        });
      });
    }, () => {
      setAttributes(defaultAttributes);
    });
  }, []);

  const setAttribute = (item) => {
    // console.log(item);
    setCurrAttribute(item);
  }

  // const getAdvanceAttribute = (attribute) => {
  //   fetch('https://www.dnd5eapi.co/api/ability-scores/' + attribute.index).then(resp => {
  //     resp.json().then(json => return json);
  //   });
  // }

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Attributes</h1>
      <ol>
        {attributes.map((item, index) => (
          // let temp = getAdvanceAttribute(item);
          <li onClick={() => setAttribute(item)}>{item.full_name}</li>
        ))}
      </ol>

      <br></br>

      {currAttribute ? (<div className="info-pane">
        <h2>{currAttribute.full_name}</h2>
        <p>{currAttribute.desc[0]}</p>
        <br></br>
        <p>{currAttribute.desc[1]}</p>
      </div>) : ""}
    </div>
  );
}

export default AttributesWikiPage;
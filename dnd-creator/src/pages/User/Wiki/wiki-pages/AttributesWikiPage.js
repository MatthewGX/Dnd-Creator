// AttributesWikiPage.js

import { useEffect, useLayoutEffect, useState } from "react";

const defaultAttributes = ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'];

const AttributesWikiPage = () => {
  // let attributes = defaultAttributes;

  const [attributes, setAttributes] = useState({});
  const [isOffline, setOffline] = useState(true);
  const [currAttribute, setCurrAttribute] = useState(undefined);

  useLayoutEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const response = await fetch('https://www.dnd5eapi.co/api/ability-scores');
    // console.log(response);
    const result = await response.json();
    
    for (let attribute of result.results) {
      const attrJSON = await (await fetch('https://www.dnd5eapi.co/api/ability-scores/' + attribute.index)).json();
      // console.log(attrJSON);

      let copy = attributes;
      copy[attribute.index] = attrJSON;
      setAttributes(copy)
    }
    
    setOffline(false);
  }

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
        {!isOffline ?
          Object.keys(attributes).map((item, index) => (
            <li onClick={() => setAttribute(attributes[item])} key={index}>{attributes[item].full_name}</li>
          )) :
          defaultAttributes.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
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
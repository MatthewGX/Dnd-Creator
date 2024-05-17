// AttributesWikiPage.js

const defaultAttributes = ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'];

const AttributesWikiPage = () => {
  let attributes = defaultAttributes;

  return (
    <div className="inner-screen">
      <h1>Available Attributes</h1>
      <ol>
        {attributes.map((item, index) => (
          <span key={index}>
            <li>{item}</li>
          </span>
        ))}
      </ol>
    </div>
  );
}

export default AttributesWikiPage;
// BackgroundsWikiPage.js

const defaultClasses = ['Bard', 'Cleric', 'Monk', 'Paladin', 'Barbarian', 'Druid', 'Fighter', 'Ranger', 'Rogue', 'Magician', 'Warlock', 'Artificer', 'Wizard'];

const BackgroundsWikiPage = () => {
  let classes = defaultClasses;

  return (
    <div className="inner-screen">
      <h1>Available Classes</h1>
      <ol>
        {classes.map((item, index) => (
          <span key={index}>
            <li>{item}</li>
          </span>
        ))}
      </ol>
    </div>
  );
}

export default BackgroundsWikiPage;
// RacesWikiPage.js

const defaultRaces = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];

const RacesWikiPage = () => {
  let races = defaultRaces;

  return (
    <div className="inner-screen">
      <h1>Available Races</h1>
      <ol>
        {races.map((item, index) => (
          <span key={index}>
            <li>{item}</li>
          </span>
        ))}
      </ol>
    </div>
  );
}

export default RacesWikiPage;
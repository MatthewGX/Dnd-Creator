// AlignmentsWikiPage.js

const defaultAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

const AlignmentsWikiPage = () => {
  let alignments = defaultAlignments;

  return (
    <div className="inner-screen">
      <h1 className="pageTitle">Available Alignments</h1>
      <ol>
        {alignments.map((item, index) => (
          <span key={index}>
            <li>{item}</li>
          </span>
        ))}
      </ol>
    </div>
  );
}

export default AlignmentsWikiPage;
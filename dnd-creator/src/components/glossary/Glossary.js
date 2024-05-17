// Glossary.js

import "./Glossary.css";
import { NavLink, Outlet } from "react-router-dom";

const Glossary = (props) => {

  // glossary = {'pageLabel': 'routingLink'}
  const pages = props.glossary;

  return (
    <div className="inner-container" id="glossary">
      <div className="col">
        <ul>
          {console.log(Object.entries(pages))}
          {Object.entries(pages).map(([pageLabel, pageRoute], index) => (
              <li key={index} id={index} className="glossary-entry">
                <NavLink to={pageRoute}>
                  {pageLabel}
                </NavLink>
              </li>
          ))}
        </ul>
      </div>
      <span id="info-screen" className="col">
        <Outlet />
      </span>
    </div>
  );
}

export default Glossary;
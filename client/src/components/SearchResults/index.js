import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <p>{props.results}</p>
      {/* {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </li>
      ))} */}
    </ul>
  );
}

export default SearchResults;

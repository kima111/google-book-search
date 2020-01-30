import React from "react";
import FormBtn from "../Form"
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
  
      {props.results.map(result => (
        <li className="list-group-item">
          <img alt="Book" src={result.volumeInfo.imageLinks.thumbnail} className="img-fluid" />
          <p>Title: {result.volumeInfo.title}</p>
          <p>Author: {result.volumeInfo.authors[0]}</p>
          <p>Link: <a href ={result.volumeInfo.infoLink} target="_blank">{result.volumeInfo.infoLink}</a></p>
          <p>Synopsis: {result.volumeInfo.description}</p>
          <br />
          <br />
          <button type="submit" title={result.volumeInfo.title} author={result.volumeInfo.authors[0]} link={result.volumeInfo.infoLink} image={result.volumeInfo.imageLinks.thumbnail} synopsis ={result.volumeInfo.description} onClick={props.handleSaveChange} className="btn btn-success">
          Save Book to Reading List
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;



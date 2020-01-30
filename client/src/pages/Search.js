import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    // API.getBaseBreedsList()
    //   .then(res => this.setState({ breeds: res.data.message }))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("clicked")
    API.getSearchedBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items[0].volumeInfo)
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };


  handleSaveChange = event =>{
    event.preventDefault();
    console.log('clicked save')
    this.setState({title: event.target.title, author: event.target.getAttribute('author'), synopsis: event.target.getAttribute('synopsis')}, ()=>{
      
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
      .catch(err=>console.log(err))
    
    })
    
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then()
    //     .catch(err => console.log(err));
    // console.log(event.target.getAttribute('synopsis'))
    
   
  }
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search Books</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults 
            results={this.state.results} 
            handleSaveChange={this.handleSaveChange}/>
        </Container>
      </div>
    );
  }
}

export default Search;

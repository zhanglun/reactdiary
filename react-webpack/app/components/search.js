import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
     let name = ReactDOM.findDOMNode(this.refs.name).value;
     if (name === '') {
      return;
    }
    this.props.sendAction(name);
  }
  render() {
    return (
      <div>
        <input type="text" ref="name" placeholder="enter the name you wanna search"/>
        <button onClick={this.handleSearch}>Search</button>
      </div>    
     )
  }
}

export default Search;
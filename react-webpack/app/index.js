import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.js';
import Plist from './components/plist.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 'keyword': '' };
    this.refreshKeyword = this.refreshKeyword.bind(this);
  }
  refreshKeyword(name) {
    this.setState({ "keyword": name });
  }

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search sendAction={this.refreshKeyword}/>
        </section>

        <Plist keyword={this.state.keyword}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
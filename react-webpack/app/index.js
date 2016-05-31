import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {Component} from 'react';
import {render} from 'react-dom';

// import Search from './components/search.js';
// import Plist from './components/plist.js';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 'keyword': '' };
//     this.refreshKeyword = this.refreshKeyword.bind(this);
//   }
//   refreshKeyword(name) {
//     this.setState({ "keyword": name });
//   }

//   render() {
//     return (
//       <div className="container">
//         <section className="jumbotron">
//           <h3 className="jumbotron-heading">Search Github Users</h3>
//           <Search sendAction={this.refreshKeyword}/>
//         </section>

//         <Plist keyword={this.state.keyword}/>
//       </div>
//     );
//   }
// }
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/App.js';
import todoApp from './reducers';

let store = createStore(todoApp);
let rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);
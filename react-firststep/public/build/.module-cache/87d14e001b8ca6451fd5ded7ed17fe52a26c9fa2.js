var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        React.createElement('div', {className: 'container', prototype: 'asdf'},
            React.createElement('h1', {className:'header'}),
            React.createElement('p', {className: 'Para'},
              React.createElement('span', {clasName: 'span'})
            )
        );
    }

});

React.render(React.createElement(MyComponent), document.getElementById('container'));

React.render(
    React.createElement("h1", null, "Hello, world!"),
    document.getElementById('container')
);

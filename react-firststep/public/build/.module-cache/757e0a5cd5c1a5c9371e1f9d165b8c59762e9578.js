var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        React.createElement('div', {className: 'contaienr', prototype: 'asdf'},
            React.createElement('h1', {className:'header'}),
            React.createElement('p', {className: 'Para'},
              React.createElement('span', {clasName: 'span'})
            )
        );
    }

});
var myElement = React.createElement(MyComponent, {someProperty: true});
React.render(myElement, document.body);

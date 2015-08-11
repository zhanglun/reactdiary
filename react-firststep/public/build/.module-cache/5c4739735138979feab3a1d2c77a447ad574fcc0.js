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
var myElement = React.createElement(CommentBox, {url: "comments.json", pollInterval: 2000});

React.render(myElement, document.body);

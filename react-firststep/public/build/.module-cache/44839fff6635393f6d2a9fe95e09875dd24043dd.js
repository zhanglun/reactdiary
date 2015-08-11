var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("div", {className: "contaienr"}, 
                React.createElement("h1", {className: "title"}, "This is the Title")
            )
        );
    }

});

//React.render(React.createElement(MyComponent), document.getElementById('container'));

React.render(
    React.createElement("h1", null, "Hello, world!"),
    document.getElementById('container')
);

var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("div", {className: "contaienr"}
                
            )
        );
    }

});

//React.render(React.createElement(MyComponent), document.getElementById('container'));

React.render(
    React.createElement("h1", null, "Hello, world!"),
    document.getElementById('container')
);

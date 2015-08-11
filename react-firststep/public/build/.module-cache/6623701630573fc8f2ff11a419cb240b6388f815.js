var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("div", {className: "contaienr"}, 
                React.createElement("h1", {className: "title"}, "This is the Title ", this.props.date)
            )
        );
    }

});

React.render(React.createElement(MyComponent, {data: new Date()}) , document.getElementById('container'));

//React.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('container')
//);

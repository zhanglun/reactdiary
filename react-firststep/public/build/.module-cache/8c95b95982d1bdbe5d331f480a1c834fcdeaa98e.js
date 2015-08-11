var myDivElement = React.createElement("div", {className: "foo"});
React.render(myDivElement, document.body);

/*** @jsx React.DOM */
var APP = React.createClass({displayName: "APP",
    render: function () {
        return (
            React.createElement("h1", null, "Hello React")
        )
    }
});

React.renderComponent(React.createElement(APP, null), document.body)

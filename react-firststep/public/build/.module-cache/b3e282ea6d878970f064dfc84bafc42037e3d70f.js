var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("div", {className: "contaienr"}, 
                React.createElement("h1", {className: "title"}, "This is the Title ", this.props.data.toString())
            )
        );
    }

});


var ListPanel = React.createClass({displayName: "ListPanel",
    render: function() {
        return (
            React.createElement("div", {className: "list-panel"}

            )
        );
    }
});

var TaskList = React.createClass({displayName: "TaskList",
    render: function(){
        var taskNodes = [1,2,3,4,5,6].map(function(){
            return (
                React.createElement(Task, null)
            );
        });
        return (
            React.createElement("div", {className: "task-list"}, 
                React.createElement("ul", null, 
                    taskNodes
                )
            )
        );
    }
});
var Task = React.createClass({displayName: "Task",
    render: function(){
        return (
            React.createElement("li", {className: "task-item"}, 
                React.createElement("p", null, 
                    "This is a task;"
                )
            )
        );
    }
});

React.render(React.createElement(MyComponent, {data: new Date()}) , document.getElementById('container'));



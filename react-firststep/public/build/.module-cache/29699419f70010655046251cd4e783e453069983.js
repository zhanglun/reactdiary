var ListPanel = React.createClass({displayName: "ListPanel",
    render: function() {
        return (
            React.createElement("div", {className: "list-panel"}, 
                React.createElement(TaskList, null)
            )
        );
    }
});

var TaskForm = React.createClass({displayName: "TaskForm",
    render: function(){
        return (
            React.createElement("div", {className: "task-form"}, 
                React.createElement("input", {type: "text", placeholder: "add task...."})
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
                    "This is a task; + ", new Date().getTime(), ";"
                )
            )
        );
    }
});

React.render(React.createElement(ListPanel, {data: new Date()}) , document.getElementById('container'));



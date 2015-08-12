var MyComponent = React.createClass({
    render: function () {
        return (
            <div className="contaienr">
                <h1 className="title">This is the Title {this.props.data.toString()}</h1>
            </div>
        );
    }

});


var ListPanel = React.createClass({
    render: function () {
        return (
            <div className="list-panel">
                <TaskList />
            </div>
        );
    }
});

var TaskList = React.createClass({
    render: function () {
        var taskNodes = [1, 2, 3, 4, 5, 6].map(function () {
            return (
                <Task />
            );
        });
        return (
            <div className="task-list">
                <ul>
                    {taskNodes}
                </ul>
            </div>
        );
    }
});
var Task = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'This is the Task title',
            date: new Date().getTime()
        }
    },
    render: function () {
        return (
            <li className="task-item">
                <p>
                    {this.props.title}
                    <span className="due-date">{this.props.date}</span>
                </p>
            </li>
        );
    }
});

React.render(<ListPanel data={new Date()}/>, document.getElementById('container'));



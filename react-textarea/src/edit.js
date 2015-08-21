var LikeButton = React.createClass({
    getInitialState: function () {
        return {liked: false}
    },
    handleClick: function (event) {
        this.setState({
            liked: !this.state.liked
        });
    },
    render: function () {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div id="app">
                <aside>
                    <TreeView />
                </aside>
                <Writer />
            </div>
        );
    }
});

var TreeView = React.createClass({
    render: function () {
        return (
            <ul>
                <li>Tree 1</li>
                <li>Tree 2</li>
                <li>Tree 3</li>
                <li>Tree 4</li>
            </ul>
        );
    }
});


var Writer = React.createClass({
    getInitialState: function () {
        return {
            placeholder: 'Typing here...'
        }
    },
    render: function () {
        return (
            <div className="writerbox">
                <WriterInputer></WriterInputer>
                <WriterController></WriterController>
            </div>
        );
    }
});

// 输入框
var WriterInputer = React.createClass({
    render: function () {
        return (
            <div className="paper"></div>
        );
    }
});

var WriterController = React.createClass({
    render: function () {
        return (
            <div className="writer-controller">
                <button>保存</button>
            </div>
        );
    }
});


React.render(
    <App />,
    document.body
);

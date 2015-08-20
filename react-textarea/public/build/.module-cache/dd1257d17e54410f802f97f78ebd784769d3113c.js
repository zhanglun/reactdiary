var LikeButton = React.createClass({displayName: "LikeButton",
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
            React.createElement("p", {onClick: this.handleClick}, 
                "You ", text, " this. Click to toggle."
            )
        );
    }
});

var Writer = React.createClass({displayName: "Writer",
    getInitialState: function () {
        return {
            placeholder: 'Typing here...'
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "writerbox"}, 
                React.createElement(WriterInputer, null), 
                React.createElement(WriterController, null)
            )
        );
    }
});

// 输入框
var WriterInputer = React.createClass({displayName: "WriterInputer",
    render: function () {
        return (
            React.createElement("textarea", {name: "inputer", id: ""})
        );
    }
});

var WriterController = React.createClass({displayName: "WriterController",
    render: function(){
        return (
            React.createElement("div", {className: "writer-controller"}, 
                React.createElement("button", null, "保存")
            )
        );
    }
});


React.render(
    React.createElement(Writer, null),
    document.getElementById('container')
);


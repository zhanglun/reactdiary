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
            <textarea name="inputer" id=""></textarea>
        );
    }
});

var WriterController = React.createClass({
    render: function(){
        return (
            <div className="writer-controller">
                <button>保存</button>
            </div>
        );
    }
});


React.render(
    <Writer />,
    document.getElementById('container')
);


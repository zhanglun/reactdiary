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


React.render(
    React.createElement(LikeButton, null),
    document.getElementById('container')
);
var LikeButton = React.createClass({displayName: "LikeButton",
    getInitialState: function(){
        return {liked: false}
    },
    handleClick: function(event){
        this.setState({
            liked: !this.state.liked
        });
    },
    render: function(){
        var text = this.state.liked ? 'like' : 'haven\'t liked';
    }
});

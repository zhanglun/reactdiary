var Avatar = React.createClass({displayName: "Avatar",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement(ProfilePic, {usename: this.props.username}), 
                React.createElement(ProfileLink, {usename: this.props.username})
            )
        );
    }
});


var ProfilePic = React.createClass({displayName: "ProfilePic",
    render: function(){
        return (
            React.createElement("img", {src: 'http://graph.facebook.com/' + this.props.username + '/picture', alt: this.props.username})
        )
    }
});
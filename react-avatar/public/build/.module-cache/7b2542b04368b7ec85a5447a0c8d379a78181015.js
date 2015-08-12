var Avatar = React.createClass({displayName: "Avatar",
    render: function(){
        return (
            React.createElement("div", null, 
                this.props.username, 
                React.createElement(ProfilePic, {username: this.props.username}), 
                React.createElement(ProfileLink, {username: this.props.username})
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

var ProfileLink = React.createClass({displayName: "ProfileLink",
    render: function(){
        return (
            React.createElement("a", {href: 'http://www.facebook.com' + this.props.username}, 
                this.props.username
            )
        );
    }
});



React.render(
    React.createElement(Avatar, {username: "zhanglun"}),
    document.getElementById('container')
);
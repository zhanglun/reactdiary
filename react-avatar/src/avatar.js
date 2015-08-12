var Avatar = React.createClass({
    render: function(){
        return (
            <div>
                {this.props.username}
                {/* Avatar在render的时候创建了组件ProfilePic和ProfileLink */}
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});


var ProfilePic = React.createClass({
    render: function(){
        return (
            <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} alt={this.props.username} />
        )
    }
});

var ProfileLink = React.createClass({
    render: function(){
        return (
            <a href={'http://www.facebook.com/' + this.props.username}>
                {this.props.username}
            </a>
        );
    }
});



React.render(
    <Avatar username='100005245268954'/>,
    document.getElementById('container')
);
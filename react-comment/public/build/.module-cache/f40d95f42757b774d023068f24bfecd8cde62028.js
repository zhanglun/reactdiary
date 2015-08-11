var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {classname: "commentList"}, 
        commentNodes
      )
    );
  }
});


var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return (
      React.createElement("div", {classname: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});
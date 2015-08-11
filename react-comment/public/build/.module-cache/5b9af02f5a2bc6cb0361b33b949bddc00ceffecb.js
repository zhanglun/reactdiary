var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    return (
      React.createElement("div", {classname: "commentList"}, 
        "Hello, world! I am a CommentList."
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
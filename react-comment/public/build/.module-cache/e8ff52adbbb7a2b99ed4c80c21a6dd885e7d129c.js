var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {classname: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
          React.createElement("h1", null, "Comments"), 
          React.createElement(CommentList, null), 
          React.createElement(CommentForm, null)
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
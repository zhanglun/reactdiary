var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {classname: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
          React.createElement("h1", null, "Comments"), 
          React.createElement(CommentList, {data: this.props.data}), 
          React.createElement(CommentForm, null)
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);
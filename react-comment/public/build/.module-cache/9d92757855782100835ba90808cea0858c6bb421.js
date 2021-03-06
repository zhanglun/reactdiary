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

  handleSubmit: function(e){
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if(!text || !author){
      return;
    }
    // TODO: send request to the server
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
  },

  render: function(){
    return (
      React.createElement("div", {classname: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});
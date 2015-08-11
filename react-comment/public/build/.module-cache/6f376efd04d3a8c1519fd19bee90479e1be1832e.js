var converter = new Showdown.converter();
var Comment = React.createClass({displayName: "Comment",
  render: function(){
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("div", null, 
          React.createElement("span", {className: "commentAuthor"}, this.props.author), 
          React.createElement("div", {dangerouslySetInnerHTML: {__html:rawMarkup}})
        )
      )
    );
  }
});
var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function(){
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <div>
          <span className="comment-author">{this.props.author}: </span>
          <div className="comment-detail" dangerouslySetInnerHTML={{__html:rawMarkup}} />
        </div>
      </div>
    );
  }
});

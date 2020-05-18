import React from 'react'
import { Comment } from "./Comment"
const DataSource = {
  getComments: () => {},
  addChangeListener: (id: any) => {},
  removeChangeListener: (id: any) => {}

}
class CommentList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comments: DataSource.getComments()
    }
  }

  componentDidMount(): void {
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount(): void {
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange() {
    this.setState({
      comments: DataSource.getComments()
    })
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment: any) => (
          <Comment comment={comment} key={comment.id}/>
        ))}
      </div>
    )
  }
}

export { CommentList }
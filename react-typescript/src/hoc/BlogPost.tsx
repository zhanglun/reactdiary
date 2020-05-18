import React from 'react'

const DataSource = {
  getBlogPost: (id: string) => {},
  addChangeListener: (id: any) => {},
  removeChangeListener: (id: any) => {}

}

class BlogPost extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return (
      <div>asdf</div>
    )
  }
}

export { BlogPost }
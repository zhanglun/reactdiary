import React from 'react'

class Square extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClick()
        }}
      >
        {this.props.value}
      </button>
    )
  }
}

export { Square }
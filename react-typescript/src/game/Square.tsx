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

// interface Props {
//   value: number|string;
//   onClick: () => void;
// }
//
// function Square(props: Props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   )
// }

export { Square }
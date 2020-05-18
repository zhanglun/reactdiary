import React from 'react'
import { Mouse } from './Mouse'

class MouseTracker extends React.Component<any, any> {
  render() {
    return (
      <>
        <h1>移动鼠标!</h1>
        <Mouse />
      </>
    );
  }
}

export { MouseTracker }
import React from 'react'
import { ThemeContext } from './theme-context'

type Props = {}

class ThemedButton extends React.Component {
  constructor(props: Props) {
    super(props);

  }

  render() {
    let { props } = this
    let { theme } = this.context

    return (
      <button {...props} style={{backgroundColor: theme.background}} />
    )
  }
}

ThemedButton.contextType = ThemeContext;

export { ThemedButton }
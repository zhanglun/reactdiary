import React, { ChangeEvent } from 'react'

const scaleNames: any = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      temperature: ''
    }
  }

  handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement
    this.props.onTemperatureChange(target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={(e: ChangeEvent) => this.handleChange(e)}/>
      </fieldset>
    )
  }
}

export { TemperatureInput }
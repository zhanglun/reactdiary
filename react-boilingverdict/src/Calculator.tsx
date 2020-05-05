import React, { ChangeEvent } from 'react'
import { TemperatureInput } from './TemperatureInput'

type Props = {}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature: string, convert: (s: number) => number) {
  const input = parseFloat(temperature)

  if (Number.isNaN(input)) {
    return ''
  }

  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000

  return rounded.toString()
}

class Calculator extends React.Component<any, any> {
  constructor(props: Props) {
    super(props)

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  renderBoilingVerdict(props: any) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>
    }

    return <p>The water would not boil</p>
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ temperature, scale: 'c' })
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ temperature, scale: 'f' })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        {this.renderBoilingVerdict({ celsius: parseFloat(celsius)})}
      </div>
    )
  }
}

export { Calculator }
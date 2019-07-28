import { Component } from 'react'

const interval = {
  minute: [5, 10, 15, 30, 45],
  hour: [1, 2, 3, 6, 12, 24]
}

class IntervalSetter extends Component {
  constructor(props) {
    super(props)
    this.state = { interval: 5, unit: 'minute' }
    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(event) {
    const target = event.target
    const name = target.name
    const value = name === 'unit' ? target.value : parseInt(target.value)
    console.log(target.value)
    await this.setState({ [name]: value })
    if (name === 'unit') {
        await this.setState({interval: document.getElementById('interval').value})
    }
    this.props.onUpdateInterval(
      this.state.unit === 'minute' ? this.state.interval * 60 : this.state.interval * 3600
    )
  }

  render() {
    return (
      <div className='field'>
        <label className='label'>Interval</label>
        <div className='columns'>
          <div className='control column is-6'>
            <div className='select is-fullwidth'>
              <select id='interval' name='interval' onChange={this.handleChange}>
                {this.state.unit === 'minute'
                  ? interval.minute.map((value, index) => {
                      return <option key={index}>{value}</option>
                    })
                  : interval.hour.map((value, index) => {
                      return <option key={index}>{value}</option>
                    })}
              </select>
            </div>
          </div>
          <div className='control column is-6'>
            <div className='select is-fullwidth' onChange={this.handleChange}>
              <select name='unit' id='unit'>
                <option>minute</option>
                <option>hour</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntervalSetter

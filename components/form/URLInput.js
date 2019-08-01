import { Component } from 'react'

class URLInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(event) {
    const target = event.target
    const value = target.value
    this.props.onUpdateURL(value)
  }

  render() {
    return (
      <div className='field'>
        <label className='label'>URL</label>
        <div className='control'>
          <input
            className='input'
            name='url'
            type='url'
            required
            placeholder='Enter your URL'
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default URLInput

import { Component } from 'react'
import axios from 'axios'

import URLInput from '../form/URLInput'
import CSSSelector from '../form/CSSSelector'
import IntervalSetter from '../form/IntervalSetter'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      cssSelectors: {},
      interval: 5
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onUpdateCSSSelectors = this.onUpdateCSSSelectors.bind(this)
    this.onUpdateURL = this.onUpdateURL.bind(this)
    this.onUpdateInterval = this.onUpdateInterval.bind(this)
  }

  onUpdateURL(url) {
    this.setState({ url: url })
  }

  onUpdateCSSSelectors(cssSelectors) {
    this.setState({ cssSelectors: cssSelectors })
  }

  onUpdateInterval(interval) {
    this.setState({ interval: interval })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/watch', this.state).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <section>
        <div className='columns is-centered m-1em'>
          <div
            id='form'
            className='column is-6-desktop is-8-tablet is-12-mobile rounded-border p-1em'
          >
            <form onSubmit={this.handleSubmit}>
              <div className='is-size-2 has-text-centered has-text-dark'>Night Watch</div>
              <URLInput onUpdateURL={this.onUpdateURL} />
              <CSSSelector onUpdateCSSSelectors={this.onUpdateCSSSelectors} />
              <IntervalSetter onUpdateInterval={this.onUpdateInterval} />
              <div className='control'>
                <button
                  id='submit-button'
                  className='button is-fullwidth'
                  onSubmit={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Form
